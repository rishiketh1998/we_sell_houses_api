const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * @description: Schema for Zoopla Properties Table
 */
module.exports =  new Schema({
    area: {type: String, required: true},
    properties: {type: Object, required: true}
})