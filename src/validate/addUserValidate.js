const Joi = require("joi");

const schema = Joi.object({
    email: Joi.string().email().required(),

    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

module.exports = schema;
