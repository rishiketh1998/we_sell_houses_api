const express = require('express')
const router = express.Router()
const statusCodes = require('../helpers/statusCode.js')
const usersCollection = require('../models/users.js')
const bcrypt = require('bcrypt')
const { loginValidationSchema } = require('../json_schemas/login.js')
const jwt = require('jsonwebtoken');
const verifyAuth = require('../helpers/authenticate.js')

/**
 * @description: uses joi library  to validate whether the email and password entered is valid (similar conditions to
 * when users registers)
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const validateData = async (req, res, next) => {
    const { error } = await loginValidationSchema.validate(req.body)
    if(error) res.status(statusCodes['FORBIDDEN']).json({"Error": 'Request denied, please enter a valid email and password'})
    else next()
}

/**
 * @description: verifies whether the email entered is present in the database
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const verifyEmail = async (req, res, next) => {
    const { email } = req.body
    try {
        const userData = await usersCollection.findOne({ email })
        if(!userData) res.status(statusCodes['FORBIDDEN']).json({"Error": 'Request denied, please enter a valid email and password'})
        else {
            req.userData = userData
            next()
        }
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: uses bcrypt to verify whether the password entered matches the users password
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const verifyPassword = async (req, res, next) => {
    const { password } = req.body
    try {
        const passwordValidation = await bcrypt.compare(password, req.userData.password)
        if(!passwordValidation) res.status(statusCodes['FORBIDDEN']).json({"Error": 'Request denied, please enter a valid email and password'})
        else next()
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: issues a jwt token once the user logs in
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const issueToken = async (req, res) => {
    try {
        const { _id } = req.userData
        const token = jwt.sign( { _id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        res.cookie('access_token', token , {
            maxAge: process.env.COOKIE_MAX_AGE,
            httpOnly: true,
        });
        const userData = await usersCollection.findById(_id)
        const {firstName, lastName, email, phoneNo, admin} = userData
        const Data = { _id, firstName, lastName, email, phoneNo, admin }
        res.status(statusCodes["OK"]).json({
            'Message': "You have successfully logged in.",
            Data
        })
    } catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

/**
 * @description: checks whether the user is logged in or not and sends back the users data
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const checkLogin = async (req, res) => {
    const { _id } = req.userData
    const userData = await usersCollection.findById(_id)
    const {firstName, lastName, email, phoneNo, admin} = userData
    const Data = { _id, firstName, lastName, email, phoneNo, admin }
    res.status(statusCodes["OK"]).json({
        'Message': "User is logged in.",
        Data
    })
}

router.post('/', validateData, verifyEmail, verifyPassword, issueToken)

router.get('/', verifyAuth, checkLogin)

module.exports = router;