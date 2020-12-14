const mongoose = require('mongoose')
const propertiesSchema = require('../db_schemas/property.js')

module.exports = mongoose.model('Properties', propertiesSchema)