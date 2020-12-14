const Joi = require('joi')
const postalCodePattern = "^([A-Z]{1,2}\\d[A-Z\\d]? ?\\d[A-Z]{2}|GIR ?0A{2})$"

/**
 * @description: schema validates the property details entered by the user by using joi library.
 * @type {Joi.ObjectSchema<any>}
 */
const propertyValidationSchema = Joi.object().keys({
    propertyType: Joi.string().required(),
    propertyName: Joi.string(),
    bedRooms: Joi.number().min(0).required(),
    bathRooms: Joi.number().min(0).required(),
    location: Joi.object().keys({
        doorNo: Joi.string().required(),
        street: Joi.string().required(),
        city: Joi.string().required(),
        county: Joi.string(),
        postalCode: Joi.string().pattern(new RegExp(postalCodePattern)).required()
    }).required(),
    price: Joi.number().min(0).required(),
    images: Joi.array().items(Joi.string()),
    underOffer: Joi.string(),
    description: Joi.string(),
    priority: Joi.string(),
    features: Joi.array().items(Joi.string())
})

/**
 * @description: schema to validate a user who plans on updating their details
 */
const updateValidationSchema = Joi.object().keys({
    propertyType: Joi.string(),
    propertyName: Joi.string(),
    bedRooms: Joi.number(),
    bathRooms: Joi.number(),
    location: Joi.object().keys({
        doorNo: Joi.string().required(),
        street: Joi.string().required(),
        city: Joi.string().required(),
        county: Joi.string(),
        postalCode: Joi.string().pattern(new RegExp(postalCodePattern)).required()
    }),
    publish: Joi.boolean(),
    price: Joi.number(),
    images: Joi.array().items(Joi.string()),
    underOffer: Joi.boolean(),
    description: Joi.string(),
    priority: Joi.string(),
    features: Joi.array().items(Joi.string())
})

module.exports = {
    propertyValidationSchema,
    updateValidationSchema
}