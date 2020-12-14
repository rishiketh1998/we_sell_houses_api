const addressSchema = require('./address.js')
const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * @description: Property Schema
 * @type {{underOffer: {default: boolean, type: StringConstructor}, features: [{type: StringConstructor}],
 * bathRooms: {type: StringConstructor, required: boolean}, images: [{type: StringConstructor}],
 * bedRooms: {type: StringConstructor, required: boolean}, price: {type: StringConstructor, required: boolean},
 * propertyType: {type: StringConstructor, required: boolean}, name: {default: undefined, type: StringConstructor},
 * description: {default: undefined, type: StringConstructor},
 * location: {city: {type: StringConstructor, required: boolean},
 * street: {type: StringConstructor, required: boolean}, postalCode: {type: StringConstructor, required: boolean},
 * county: {default: undefined, type: StringConstructor}, doorNo: {type: StringConstructor, required: boolean}},
 * priority: {default: string, type: StringConstructor}}}
 */
module.exports =  new Schema({
    propertyType: {type: String, required: true},
    propertyName: {type: String, default: undefined},
    bedRooms: {type: Number, required: true},
    bathRooms: {type: Number, required: true},
    location: addressSchema,
    price: {type: Number, required: true},
    images: {type: Array, default: ["data:image/png;base64,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"]},
    underOffer: {type:Boolean, default: false},
    publish: {type:Boolean, default: true},
    description: {type: String, default: "No description provided."},
    priority: {type: String, default: 'Normal'},
    features: [{type: String}],
    messages: [{type: Schema.Types.ObjectID, ref: 'Messages'}],
    date: { type: Date, default: Date.now },
    userID: {type: Schema.Types.ObjectID, ref: 'Users' }
})