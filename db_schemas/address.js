

/**
 * @description: schema for address object
 * @type {{city: {type: StringConstructor, required: boolean}, street: {type: StringConstructor, required: boolean},
 * postalCode: {type: StringConstructor, required: boolean}, county: {default: undefined, type: StringConstructor},
 * doorNo: {type: StringConstructor, required: boolean}}}
 */
module.exports = {
    doorNo: {type: String, required: true},
    street: {type: String, required: true},
    city: {type: String, required: true},
    county: {type: String, default: undefined},
    postalCode: {type: String, required: true}
}