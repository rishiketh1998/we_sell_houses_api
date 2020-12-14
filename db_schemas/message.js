const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * @description: message schema
 * @type {{messageStatus: {default: string, type: StringConstructor}, message: {type: StringConstructor, required: boolean}
 * , email: {type: StringConstructor, required: boolean}}}
 */
module.exports = new Schema({
    message: {type: String, required: true},
    email: {type: String, required: true},
    messageStatus: {type: String, default: "unread"},
    propertyID: {type: Schema.Types.ObjectID, ref: 'Properties'}
})