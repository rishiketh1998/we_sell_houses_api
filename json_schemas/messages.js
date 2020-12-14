const Joi = require('joi')

const messageValidationSchema = Joi.object().keys({
    message: Joi.string().required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'uk']}}).max(256).required(),
    messageStatus: Joi.string()
})

const updateValidationSchema = Joi.object().keys({
    message: Joi.string(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'uk']}}).max(256),
    messageStatus: Joi.string()
})

module.exports = {
    messageValidationSchema,
    updateValidationSchema
}