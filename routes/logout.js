const express = require('express')
const router = express.Router()
const statusCodes = require('../helpers/statusCode.js')

/**
 * @description: Once the user posts on the log out route, it'll issue a new token in the name of previous token
 * to the user with a expiry date of 2ms.
 * Therefore when the user click logout it'll get rid of the token the user has access to and thereby logging out the user
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const logout = (req, res) => {
    res.cookie('access_token', 'logout', {
        expiresIn: new Date(Date.now() * 2 * 1000),
        httpOnly: true
    })
    res.status(statusCodes['OK']).json({'Message': 'You have successfully logged out.'})
}

router.post('/', logout)

module.exports = router