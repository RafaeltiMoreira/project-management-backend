const Joi = require('joi');

const card = Joi.object({
  title: Joi
    .string()
    .min(3)
    .max(30)
    .required(),
});

module.exports = card