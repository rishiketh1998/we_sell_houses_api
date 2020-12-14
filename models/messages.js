const mongoose = require('mongoose')
const messagesSchema = require('../db_schemas/message.js')


module.exports = mongoose.model('Messages', messagesSchema)