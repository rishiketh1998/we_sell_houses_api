const usersModel = require('../models/users.js')
const propertiesModel = require('../models/properties.js')
const messagesModel = require('../models/messages.js')
const statusCodes = require('../helpers/statusCode.js')

/**
 * @description: determines user permission
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
module.exports = async (req, res, next) => {
    switch (true) {
        /**
         * @description: permits if the user is admin or the userID belongs to the user
         */
        case req.params.userID != null:
            try {
                const userData = await usersModel.findById(req.userData._id)
                if(userData.admin || req.userData._id === req.params.userID) next()
                else  res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
            } catch (e) {
                res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
            }
            break
        /**
         * @description: permits if the user is either admin or the property belongs to the user
         * @param req
         * @param res
         * @param next
         * @returns {Promise<void>}
         */
        case req.params.propertyID != null:
            try {
                const userData = await usersModel.findById(req.userData._id)
                const propertyData = await propertiesModel.findById(req.params.propertyID)
                if(userData.admin || req.userData._id === propertyData.userID.toString()) next()
                else res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
            } catch (e) {
                res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
            }
            break
        /**
         * @description: permits users who are admins or users that have receive the message
         */
        case req.params.messageID != null:
            try {
                const userData = await usersModel.findById(req.userData._id)
                const messageData = await messagesModel.findById(req.params.messageID)
                const propertiesData = await propertiesModel.findById(messageData.propertyID)
                if(userData.admin || req.userData._id === propertiesData.userID.toString()) next()
                else res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
            } catch (e) {
                res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
            }
            break
        /**
         * @description: permits only the admin
         */
        default:
            try {
                const userData = await usersModel.findById(req.userData._id)
                if(!userData.admin) res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
                else next()
            } catch (e) {
                res.status(statusCodes['FORBIDDEN']).json({"Error": "Request Denied"})
            }
    }
}