const express = require('express')
const router = express.Router()
const statusCodes = require('../helpers/statusCode.js')
const fetch = require("node-fetch");
const zooplaModel = require('../models/zooplaProperties.js')

/**
 * @description: retrieves properties from zoopla api and stores it in database and returns the data retrieved from the
 * api
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getPropertiesByArea = async (req, res) => {
    const { area } = req.body
    const url = `http://api.zoopla.co.uk/api/v1/property_listings.json?area=${area}&api_key=uk94kn9y8nbqkmgra54cnfmb`
    try {
        const result = await fetch(url, {Method: "GET"})
        const properties = await result.json()
        const saveDataToDb = {
            properties,
            area
        }
        const zooplaData = new zooplaModel(saveDataToDb)
        await zooplaData.save()
        res.status(statusCodes['OK']).json({properties})
    }
    catch (e) {
        res.status(statusCodes['INTERNAL SERVER ERROR']).json({"Error": "Internal server error, Please try again in sometime."})
    }
}

router.post('/', getPropertiesByArea)

module.exports = router