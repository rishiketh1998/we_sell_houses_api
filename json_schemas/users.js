const Joi = require('joi')
const passwordComplexity = require("joi-password-complexity");
const phoneNumberRegex = "^(((\\+44\\s?\\d{4}|\\(?0\\d{4}\\)?)\\s?\\d{3}\\s?\\d{3})|((\\+44\\s?\\d{3}|\\" +
    "(?0\\d{3}\\)?)\\ s?\\d{3}\\s?\\d{4})|((\\+44\\s?\\d{2}|\\(?0\\d{2}\\)?)\\s?\\d{4}\\" +
    "s?\\d{4}))(\\s?\\#(\\d{4}|\\d{3}))?$"
const postalCodePattern = "^([A-Z]{1,2}\\d[A-Z\\d]? ?\\d[A-Z]{2}|GIR ?0A{2})$"

/**
 * @description: schema to validate a new users data
 * @type {Joi.ObjectSchema<any>}
 */
const registerValidationSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'uk']}}).required().max(256).required(),
    password: passwordComplexity().required(),
    phoneNo: Joi.string().pattern(new RegExp(phoneNumberRegex)).required(),
    profileImg: Joi.string(),
    address: Joi.object().keys({
        doorNo: Joi.string().required(),
        street: Joi.string().required(),
        city: Joi.string().required(),
        county: Joi.string(),
        postalCode: Joi.string().pattern(new RegExp(postalCodePattern)).required()
    }).required()
})

/**
 * @description: schema to validate a user who plans on updating their details
 */
const updateValidationSchema = Joi.object().keys({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'uk']}}).max(256),
    password: passwordComplexity(),
    phoneNo: Joi.string().pattern(new RegExp(phoneNumberRegex)),
    profileImg: Joi.string(),
    address: Joi.object().keys({
        doorNo: Joi.string().required(),
        street: Joi.string().required(),
        city: Joi.string().required(),
        county: Joi.string(),
        postalCode: Joi.string().pattern(new RegExp(postalCodePattern)).required()
    })
})

module.exports = {
    registerValidationSchema,
    updateValidationSchema
}
