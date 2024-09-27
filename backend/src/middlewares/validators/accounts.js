import joi from "joi";

export const transferFundsValidators = async (req, res, next) => {
  const body = req.body;

  const schema = joi.object({
    toUserId: joi.string(),
    amount: joi.number(),
  });

  try {
    await schema.validateAsync();
    next();
  } catch (err) {
    console.log(`Error validating transfer funds payload: ${err}`);
    res.status(411).json({ message: err.details[0].message });
  }
};
