import { findUsers } from "../models/users.js";

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
