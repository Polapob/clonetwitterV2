import Joi from 'joi';

export const userSchema = Joi.object({
  id: Joi.string().required(),
});
