const Joi = require('joi');

const card = Joi.object({
  title: Joi
    .string()
    .min(3)
    .max(30)
    .required(),

  description: Joi.string()
    .min(3)
    .max(250)
    .required(),

  image: Joi.string()
    .uri()
    .required(),

  deploy: Joi.string()
    .uri()
    .required(),
});

module.exports = card