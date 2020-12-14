const mongoose = require('mongoose')
const usersSchema = require('../db_schemas/users.js')

module.exports = mongoose.model('Users', usersSchema)

