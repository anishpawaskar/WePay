import { createNewUserModel, findUserByUsername } from "../models/users.js";
import { generateHashPassword, generateJwt } from "../utils/auth.js";

export const signupUser = async (req, res) => {
  const { username, firstName, lastName, password } = req.body;

  try {
    const existingUser = await findUserByUsername(username);

    if (existingUser) {
      return res.status(411).json("Email already taken.");
    }

    const newUser = await createNewUserModel({
      username,
      firstName,
      lastName,
      hashPassword: await generateHashPassword(password),
    });

    const token = generateJwt({ userName: newUser._id });

    res.status(201).json({ message: "New user created.", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error while signing up user." });
  }
};
