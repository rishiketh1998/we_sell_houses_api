const jwt = require('jsonwebtoken');
const statusCodes = require('./statusCode.js')

/**
 * @description: middleware function that checks whether the entered user is issued with a JWT token or not, if the
 * user is issued with the right token then it stores the userId and jet details in req object
 * @param req
 * @param res
 * @param next
 * @returns {any}
 */
module.exports = (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            res.status(statusCodes['OK']).json({'Unauthorized': 'Please log in to access this route'})
        } else {
            req.userData = decoded;
            next()
        }
    } catch (err) {
        res.status(statusCodes['UNAUTHORIZED']).json({'Unauthorized': 'Please log in to access this route'})
    }
};