const Joi = require('joi')
const passwordComplexity = require("joi-password-complexity");

const loginValidationSchema = Joi.object().keys({
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'uk']}}).required().max(256),
    password: passwordComplexity().required()
})

module.exports = {
    loginValidationSchema
}