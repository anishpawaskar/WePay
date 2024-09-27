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

export const transferFundsModel = async (fromUserId, toUserId, amount) => {
  const session = await mongoose.startSession();
  let res = {};

  try {
    session.startTransaction();
    const senderAccount = await findAccountByUserId(fromUserId);

    if (senderAccount.balance < amount) {
      await session.abortTransaction();
      res.message = "Insufficient balance";
      res.status = 400;
      return res;
    }

    const receiverAccount = await findAccountByUserId(toUserId);

    if (!receiverAccount) {
      await session.abortTransaction();
      res.message = "Invalid bank account";
      res.status = 400;
      return res;
    }

    //update sender balance
    await Accounts.findOneAndUpdate(
      { userId: fromUserId },
      { $inc: { balance: -amount } }
    ).session(session);

    //update recipient balance
    await Accounts.findOneAndUpdate(
      { userId: toUserId },
      { $inc: { balance: amount } }
    ).session(session);

    await session.commitTransaction();
    res.message = "Transfer successfull";
    res.status = 203;

    return res;
  } catch (err) {
    await session.abortTransaction();
    console.log(`Error while transfering funds`);
    throw err;
  }
};
