import { findAccountByUserId } from "../models/accounts.js";

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
