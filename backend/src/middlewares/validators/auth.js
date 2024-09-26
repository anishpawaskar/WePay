import joi from "joi";

export const signupUserValidator = async (req, res, next) => {
  const body = req.body;

  const schema = joi.object({
    username: joi.string().email().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    password: joi.string().required(),
  });

  try {
    await schema.validateAsync(body);
    next();
  } catch (err) {
    console.log(`Error validating siginUser payload: ${err}`);
    res.status(411).json({ message: err.details[0].message });
  }
};
