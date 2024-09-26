import { findUserByIdAndUpdate, findUsers } from "../models/users.js";

export const getUsers = async (req, res) => {
  const filter = req.query.filter || "";

  try {
    const users = await findUsers(filter);
    res.status(200).json({ message: "Users returned successfully.", users });
  } catch (err) {
    console.log(`Error while fetching all users ${err}`);
    res.status(500).json({ message: "Error while fetching all users." });
  }
};

export const updateUser = async (req, res) => {
  const body = req.body;
  const userId = req.userId;
  try {
    await findUserByIdAndUpdate(userId, body);
    res.status(204).json({ message: "Updated successfully" });
  } catch (err) {
    console.log(`Error while updating user information ${err}`);
    res.status(500).json({ message: "Error while updating user information." });
  }
};
