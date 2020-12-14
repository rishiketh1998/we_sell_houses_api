const express = require('express')
const router = express.Router()
const statusCodes = require('../helpers/statusCode.js')
const verifyAuth = require('../helpers/authenticate.js')
const usersModel = require('../models/users.js')
const propertiesModel = require('../models/properties.js')
const messagesModel = require('../models/messages.js')
const { propertyValidationSchema, updateValidationSchema } = require('../json_schemas/properties.js')
const userPermission = require('../permissions/users.js')
const { messageValidationSchema } = require('../json_schemas/messages.js')

/**
 * @description: modifies to help filter the data for users
 * @param queryObject
 * @returns {{}}
 */
const filterObject = queryObject => {
    const filter = {}
    if(queryObject['page']) delete queryObject['page']
    if(queryObject['limit']) delete queryObject['limit']
    if(queryObject['sort']) delete queryObject['sort']
    for (const query in queryObject) {
        switch (true) {
            case query === 'minBedRooms' || query === 'maxBedRooms':
                filter.bedRooms = { "$gte": +queryObject.minBedRooms || 0, "$lte": +queryObject.maxBedRooms || 100000}
                break
            case query === 'minBathRooms' || query === 'maxBathRooms':
                filter.bathRooms = { "$gte": +queryObject.minBathRooms || 0, "$lte": +queryObject.maxBathRooms || 100000}
                break
            case query === 'minPrice' || query === 'maxPrice':
                filter.price = { "$gte": +queryObject.minPrice || 0, "$lte": +queryObject.maxPrice || 100000000000000}
                break
            case query === 'features':
                let arr = queryObject.features.split(',')
                filter.features = { "$all": arr}
                break
            default:
                filter[query] = queryObject[query]
        }
    }
    return filter
}

/**
 * @description: retrieves all the properties that's been registered to the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllProperties = async (req, res) => {
    const limit  = req.query.limit ? parseInt(req.query.limit) : 100
    const page = req.query.page ? parseInt(req.query.page) : 1
    const sort = req.query.sort ? req.query.sort : "-date"
    const result = { page, limit }
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const copyQueryObj = JSON.parse(JSON.stringify(req.query)) //copied query object
    const filter = filterObject(copyQueryObj)
    try {
        const propertiesData = await propertiesModel.find(filter).skip((page - 1) * limit).limit(limit).sort(sort)
        if((await propertiesModel.find(filter).skip((page) * limit).limit(limit)).length > 0) {
            if(!req.query.page && !req.query.limit) result.nextPage = fullUrl + `?page=${+page + 1}&limit=${result.limit}`
            if(!req.query.page && req.query.limit) result.nextPage = fullUrl + `&page=${+page + 1}`
            if(req.query.page) result.nextPage = fullUrl.replace(`page=${page}`, `page=${+page + 1}`)
        }
        if(page > 1) result.previousPage = fullUrl.replace(`page=${page}`, `page=${+page - 1}`)
        result.data = propertiesData
        res.status(statusCodes['OK']).json({'Result': propertiesData.length < 1 ? "No Data Found" : result})
    } catch (e) {
        console.log(e)
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: retrieves individual property details from the id passed through as a parameter and if the property
 * does not exist then a message stating Request denied is returned
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getPropertyByID = async (req, res) => {
    try {
        const propertyData = await propertiesModel.findOne({ _id: req.params.propertyID })
        const result = {}
        result.data = []
        result.data.push(propertyData)
        res.status(statusCodes['OK']).json({'Result': !propertyData ? 'No Data Found' : result })
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: gets all the messages for the property from the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllMessagesByPropertyID = async (req, res) => {
    try {
        const messagesData = (await propertiesModel.findById(req.params.propertyID).populate('messages')).messages
        const result = {}
        result.data = messagesData
        res.status(statusCodes['OK']).json({'Result': messagesData.length < 1 ? "No Data Found" : result })
    } catch (e) {
        res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied."})
    }
}

/**
 * @description: verifies if the value needed to be update exists in the updateValidation schema
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const verifyUpdateData = async (req, res, next) => {
    const { error } = await updateValidationSchema.validate(req.body)
    if(error) res.status(statusCodes['BAD REQUEST']).json({"Error": error.details[0].message})
    else next()
}

/**
 * @description: finds the property that's requested to update its details and if the property is found then it updates the property
 * data and returns a message stating successfully updated along with a status code of 200 else if the property is not
 * found it the db then it returns a status of 403 along with a message stating request denied
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateProperty = async (req, res) => {
    try {
        await propertiesModel.findOneAndUpdate({ _id: req.params.propertyID }, req.body)
        res.status(statusCodes['OK']).json({"Message": "You have successfully updated your property."})
    } catch (e) {
        res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
    }
}

/**
 * @description: verifies if the data passed to the server matches the propertyValidationSchema and if it does not then
 * it returns a message stating why the validation is failed
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const verifyPropertyData = async (req, res, next) => {
    const { error } = await propertyValidationSchema.validate(req.body)
    if(error) res.status(statusCodes['BAD REQUEST']).json({"Error": error.details[0].message})
    else next()
}

/**
 * @description: creates a new property and inserts it to the property collection and then save the property id in the
 * users collection property key and then the users Collection is saved to the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const createProperty = async (req, res) => {
    try {
        const propertyData = new propertiesModel(req.body)
        const userData = await usersModel.findOne({ _id :req.userData._id})
        propertyData.userID = req.userData._id
        userData.properties.push(await propertyData.save())
        await userData.save()
        res.status(statusCodes['CREATED']).json({"Message": "You have successfully added a Property."})
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: verifies if the data passed to the server matches the messageValidationSchema and if it does not then
 * it returns a message stating why the validation is failed
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const verifyMessageData = async (req, res, next) => {
    const { error } = await messageValidationSchema.validate(req.body)
    if(error) res.status(statusCodes['BAD REQUEST']).json({"Error": error.details[0].message})
    else next()
}

/**
 * @description: posts a new message and inserts it to the message collection and then saves the message id in the
 * properties collection
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const postMessage = async (req, res) => {
    try {
        const messageData = new messagesModel(req.body)
        const propertyData = await propertiesModel.findById(req.params.propertyID)
        messageData.propertyID = req.params.propertyID
        propertyData.messages.push(await messageData.save())
        propertyData.save()
        res.status(statusCodes['OK']).json({"Message": "Your message has been posted."})
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: retrieves the id from the req parameter object and if the id entered is present in the database then it
 * deletes the property (removes it from oth user collection and property collection) and returns a message stating
 * account has been deleted along with a status code of 200, if the id
 * is not available in the db then it returns a message stating Request denied along with a status code of 403
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteProperty = async (req, res) => {
    try {
        const { propertyID } = req.params
        const propertiesData = await propertiesModel.findById(propertyID)
        const userData = await usersModel.findById(propertiesData.userID)
        const index = userData.properties.indexOf(propertyID)
        userData.properties.splice(index, 1)
        await userData.save()
        await propertiesModel.findOneAndDelete({ _id: propertyID })
        res.status(statusCodes['OK']).json({"Message": "Your property has been deleted"})
    } catch (e) {
        res.status(statusCodes['FORBIDDEN']).json({"Forbidden": "Request Denied"})
    }
}

router.get('/', getAllProperties)
router.get('/:propertyID', getPropertyByID)
router.get('/:propertyID/messages', verifyAuth, userPermission, getAllMessagesByPropertyID)
router.put('/:propertyID', verifyAuth, userPermission, verifyUpdateData, updateProperty)
router.post('/', verifyAuth, verifyPropertyData, createProperty)
router.post('/:propertyID/messages', verifyMessageData, postMessage)
router.delete('/:propertyID', verifyAuth, userPermission, deleteProperty)

module.exports = router