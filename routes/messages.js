const express = require('express')
const router = express.Router()
const statusCodes = require('../helpers/statusCode.js')
const verifyAuth = require('../helpers/authenticate.js')
const propertiesModel = require('../models/properties.js')
const messagesModel = require('../models/messages.js')
const { updateValidationSchema } = require('../json_schemas/messages.js')
const userPermission = require('../permissions/users.js')

/**
 * @description: retrieves all the messages that has been posted in the database.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllMessages = async (req, res) => {
    const limit  = req.query.limit ? parseInt(req.query.limit) : 100
    const page = req.query.page ? parseInt(req.query.page) : 1
    const result = { page, limit }
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const filterObj = JSON.parse(JSON.stringify(req.query))
    if(filterObj['page']) delete filterObj['page']
    if(filterObj['limit']) delete filterObj['limit']
    try {
        const messagesData = await messagesModel.find(filterObj).skip((page - 1) * limit).limit(limit)
        if((await messagesModel.find(filterObj).skip((page) * limit).limit(limit)).length > 0) {
            if(!req.query.page && !req.query.limit) result.nextPage = fullUrl + `?page=${+page + 1}&limit=${result.limit}`
            if(!req.query.page && req.query.limit) result.nextPage = fullUrl + `&page=${+page + 1}`
            if(req.query.page) result.nextPage = fullUrl.replace(`page=${page}`, `page=${+page + 1}`)
        }
        if(page > 1) result.previousPage = fullUrl.replace(`page=${page}`, `page=${+page - 1}`)
        result.data = messagesData
        res.status(statusCodes['OK']).json({'Result': messagesData.length < 1 ? "No Data Found" : result})
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: retrieves a message based on its id
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getMessageByID = async (req, res) => {
    try {
        const message = await messagesModel.findOne({ _id: req.params.messageID })
        const result = {}
        result.data = []
        result.data.push(message)
        res.status(statusCodes['OK']).json({'Result': !message ? "No Data Found" : result })
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
 *  @description: finds the message that's requested to update its details and if the message is found then it updates the message
 * data and returns a message stating successfully updated along with a status code of 200 else if the message is not
 * found it the db then it returns a status of 403 along with a message stating request den
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateMessage = async (req, res) => {
    try {
        const { messageID } = req.params
        await messagesModel.findOneAndUpdate({ _id: messageID }, req.body)
        res.status(statusCodes['OK']).json({"Message": "You have successfully updated the message."})
    } catch (e) {
        res.status(statusCodes['FORBIDDEN']).json({"Forbidden": "Request Denied"})
    }
}

/**
 * @description: delete the message from the db depending on the id passed through
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteMessage = async (req, res) => {
    try {
        const { messageID } = req.params
        const messageData = await messagesModel.findById(messageID)
        const propertiesData = await propertiesModel.findById(messageData.propertyID)
        const index = propertiesData.messages.indexOf(messageID)
        propertiesData.messages.splice(index, 1)
        await propertiesData.save()
        await messagesModel.findOneAndDelete({ _id : messageID })
        res.status(statusCodes['OK']).json({"Message": "Your message has been deleted"})
    } catch (e) {
        console.log(e)
        res.status(statusCodes['FORBIDDEN']).json({"Forbidden": "Request Denied"})
    }
}

router.get('/', verifyAuth, userPermission, getAllMessages)
router.get('/:messageID', verifyAuth, userPermission, getMessageByID)
router.put('/:messageID', verifyAuth, userPermission, verifyUpdateData, updateMessage)
router.delete('/:messageID', verifyAuth, userPermission, deleteMessage)

module.exports = router