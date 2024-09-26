import joi from "joi";

export const getUsersValidator = async (req, res, next) => {
  const query = req.query;

  const schema = joi.object({
    filter: joi.string().optional(),
  });

  try {
    await schema.validateAsync(query);
    next();
  } catch (err) {
    console.log(`Error while validating getUsers payload: ${err}`);
    res.status(411).json({ message: err.details[0].message });
  }
};

export const updateUserValidator = async (req, res, next) => {
  const body = req.body;

  const schema = joi.object({
    firstName: joi.string().optional,
    lastName: joi.string().optional,
    password: joi.string().optional,
  });

  try {
    await schema.validateAsync(body);
    next();
  } catch (err) {
    console.log(
      `Error while validating update user information payload: ${err}`
    );
    res.status(411).json({ message: err.details[0].message });
  }
};
