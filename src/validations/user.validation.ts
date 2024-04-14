import { celebrate, Joi, Segments } from "celebrate";

const userLoginValidationMiddleware = celebrate({
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).unknown(),
});

const userAddValidationMiddleware = celebrate({
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    mobile: Joi.string().required(),
  }).unknown(),
});

const userUpdateValidationMiddleware = celebrate({
  [Segments.BODY]: Joi.object({
    user_id: Joi.any().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    mobile: Joi.string().required(),
  }).unknown(),
});

const userRemoveValidationMiddleware = celebrate({
  [Segments.BODY]: Joi.object({
    user_id: Joi.any().required(),
  }).unknown(),
});

const userGetValidationMiddleware = celebrate({
  [Segments.BODY]: Joi.object({
    pageSize: Joi.any().required(),
    pageIndex: Joi.any().required(),
  }).unknown(),
});

const getUserByIdValidationMiddleware = celebrate({
  [Segments.BODY]: Joi.object({
    user_id: Joi.any().required(),
  }),
});

const forgotUserValidationMiddleware = celebrate({
  [Segments.BODY]: Joi.object({
    email: Joi.string().email().required(),
  }).unknown(),
});

export default {
  userLoginValidationMiddleware,
  userAddValidationMiddleware,
  userGetValidationMiddleware,
  userRemoveValidationMiddleware,
  userUpdateValidationMiddleware,
  getUserByIdValidationMiddleware,
  forgotUserValidationMiddleware,
};
