const express = require('express')
const router = express.Router()
const statusCodes = require('../helpers/statusCode.js')
const { registerValidationSchema, updateValidationSchema } = require('../json_schemas/users.js')
const usersModel = require('../models/users.js')
const propertiesModel = require('../models/properties.js')
const bcrypt = require('bcrypt')
const verifyAuth = require('../helpers/authenticate.js')
const userPermission = require('../permissions/users.js')

/**
 * @description: retrieves all the users that have registered from the database
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllUsers = async (req, res) => {
    const limit  = req.query.limit ? parseInt(req.query.limit) : 100
    const page = req.query.page ? parseInt(req.query.page) : 1
    const result = { page, limit }
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const filterObj = JSON.parse(JSON.stringify(req.query))
    if(filterObj['page']) delete filterObj['page']
    if(filterObj['limit']) delete filterObj['limit']
    try {
        const usersData = await usersModel.find(filterObj).skip((page - 1) * limit).limit(limit)
        if((await usersModel.find(filterObj).skip((page) * limit).limit(limit)).length > 0) {
            if(!req.query.page && !req.query.limit) result.nextPage = fullUrl + `?page=${+page + 1}&limit=${result.limit}`
            if(!req.query.page && req.query.limit) result.nextPage = fullUrl + `&page=${+page + 1}`
            if(req.query.page) result.nextPage = fullUrl.replace(`page=${page}`, `page=${+page + 1}`)
        }
        if(page > 1) result.previousPage = fullUrl.replace(`page=${page}`, `page=${+page - 1}`)
        result.data = usersData
        res.status(statusCodes['OK']).json({'Result': usersData.length < 1 ? "No Data Found" : result})
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: retrieves an individual user information from the user ID passed in the parameter and if the id passed
 * through is valid then it returns a result with the user data along with a status code of 200 else it returns with
 * a status code of 403 and a message stating request denied
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getByID = async (req, res) => {
    try {
        const userData = await usersModel.findOne({_id: req.params.userID})
        const result = {}
        result.data = []
        result.data.push(userData)
        res.status(statusCodes['OK']).json( { 'Result': !userData ? "No Data Found" : result })
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

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
 * @description: retrieves all the properties associated to one user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getPropertiesByUserID = async (req, res) => {
    const limit  = req.query.limit ? parseInt(req.query.limit) : 100
    const page = req.query.page ? parseInt(req.query.page) : 1
    const result = { page, limit }
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const copyQueryObj = JSON.parse(JSON.stringify(req.query)) //copied query object
    const filter = filterObject(copyQueryObj)
    const sort = req.query.sort ? req.query.sort : "-date"
    filter.userID = req.params.userID
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
        res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
    }
}

/**
 * @description: retrieves all the messages related to the user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllMessagesByUserID = async (req, res) => {
    try {
        const userProperties = (await usersModel.findById(req.params.userID)).properties
        const messagesData = []
        for(const property of userProperties) {
            const propertyData = await propertiesModel.findById(property).populate('messages')
            if(propertyData.messages) messagesData.push(...(propertyData.messages))
        }
        const result = {}
        result.data = messagesData
        res.status(statusCodes['OK']).json({'Result': messagesData.length < 1 ? "No Data Found" : result })
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: verifies whether the data passed though is valid and if it is then it moves on to the next function else
 * it returns the error for it to fails as well sets the status to be 400 if it is wrong
 */
const verifyRegisterData =  async (req, res, next) => {
    const { error } = await registerValidationSchema.validate(req.body)
    if(error) res.status(statusCodes['BAD REQUEST']).json({ "Error": error.details[0].message })
    else next()
}

/**
 * @description: hashes the password entered by the user by using the npm bcrypt package
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const hashPassword = async (req, res, next) => {
    try{
        req.body['password'] = await bcrypt.hash(req.body['password'], parseInt(process.env.SALT));
        next()
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: function tries to save the data to the database and if the email entered already exists in the database
 * then it return email is already entered else it returns internal Sever error, if everything passes then
 * it sends a message stating You have successfully registered along with a status code 200
 */
const createUser = async (req, res) => {
    const userData = new usersModel(req.body)
    try {
        await userData.save()
        res.status(statusCodes['CREATED']).json({ "Message": "You have successfully registered." })
    } catch (e) {
        if(e.name === 'MongoError') res.status(statusCodes['BAD REQUEST']).json({"Error": "Email entered is already registered."})
        else res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
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
 * @description: finds the user that's requested to update its details and if the user is found then it updates the users
 * data else and returns a message stating successfully registered along with a status code of 200 else if the user is not
 * found it the db then it returns a status of 403 along with a message stating request denied
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateUser = async (req, res) => {
    try {
        await usersModel.findOneAndUpdate({ _id: req.params.userID }, req.body)
        res.status(statusCodes['OK']).json({ "Message": "You have successfully updated your account." })
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: retrieves the id from the req parameter object and if the id entered is present in the database then it
 * deletes the account and returns a message stating account has been deleted along with a status code of 200, if the id
 * is not available in the db then it returns a message stating Request denied along with a status code of 403
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteUser = async (req, res) => {
    try {
        if(req.params.userID === req.userData._id) {
            res.cookie('access_token', 'logout', {
                expiresIn: new Date(Date.now() * 2 * 1000),
                httpOnly: true
            }) //removes the cookie associated to user*/
        }
        await usersModel.findOneAndDelete({ _id: req.params.userID })
        res.status(statusCodes['OK']).json({ "Message": "Your account has been deleted" })
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

router.get('/', verifyAuth, userPermission, getAllUsers)
router.get('/:userID', verifyAuth, userPermission, getByID)
router.get('/:userID/properties', verifyAuth, userPermission, getPropertiesByUserID)
router.get('/:userID/messages', verifyAuth, userPermission, getAllMessagesByUserID)
router.post('/',verifyRegisterData, hashPassword, createUser)
router.put('/:userID', verifyAuth, userPermission, verifyUpdateData, updateUser)
router.delete('/:userID', verifyAuth, userPermission, deleteUser)

module.exports = router;