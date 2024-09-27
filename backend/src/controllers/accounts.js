import { findAccountByUserId, transferFundsModel } from "../models/accounts.js";

export const getUserAccountBalance = async (req, res) => {
  const userId = req.userId;

  try {
    const userAccount = await findAccountByUserId(userId);

    if (!userAccount) {
      return res.status(404).json({ message: "User account not found" });
    }

    res
      .status(200)
      .json({ message: "User account found", balance: userAccount.balance });
  } catch (err) {
    console.log(`Error while fetching user account balance: ${err}`);
    res
      .status(500)
      .json({ message: "Error while fetching user account balance." });
  }
};

export const transferFunds = async (req, res) => {
  const { userId } = req;
  const { toUserId, amount } = req.body;
  console.log("userId", userId);

  try {
    const result = await transferFundsModel(userId, toUserId, amount * 100);
    res.status(result.status).json({ message: result.message });
  } catch (err) {
    console.log(`Error while transfering funds: ${err}`);
    res.status(500).json({ message: "Error while transfering funds." });
  }
};
