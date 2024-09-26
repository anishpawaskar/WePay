import mongoose from "mongoose";

const accountsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  balance: Number,
});

const Accounts = mongoose.model("accounts", accountsSchema);

export const createNewAccount = async (userId) => {
  await Accounts.create({
    userId,
    balance: Math.floor(Math.random() * 10000) * 100,
  });
};

export const findAccountByUserId = async (userId) => {
  const account = await Accounts.findOne({ userId }).exec();
  return account;
};
