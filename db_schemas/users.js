const addressSchema = require('./address.js')
const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * @description: Schema for users table
 */
module.exports =  new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phoneNo: {type: String, required: true},
    address: addressSchema,
    admin: {type: Boolean, default: false},
    profileImg: {type: String, default: undefined},
    date: { type: Date, default: Date.now },
    properties: [{type: Schema.Types.ObjectID, ref: 'Properties'}]
})