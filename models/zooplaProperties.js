const mongoose = require('mongoose')
const zooplaSchema = require('../db_schemas/zooplaProperties.js')

module.exports = mongoose.model('Zoopla', zooplaSchema)