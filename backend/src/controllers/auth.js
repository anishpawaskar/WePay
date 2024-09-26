import { createNewAccount } from "../models/accounts.js";
import { createNewUserModel, findUserByUsername } from "../models/users.js";
import {
  compareHashPassword,
  generateHashPassword,
  generateJwt,
} from "../utils/auth.js";

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

    const token = generateJwt({ userId: newUser._id });

    await createNewAccount(newUser._id);

    res.status(201).json({ message: "New user created.", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error while signing up user." });
  }
};

export const signinUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(404).json({ message: "Email is invalid." });
    }

    const matchPassword = await compareHashPassword(
      password,
      user.hashPassword
    );

    if (!matchPassword) {
      return res.status(411).json({ message: "Password is invalid." });
    }

    const token = generateJwt({ userId: user._id });

    res.status(200).json({ message: "User logged in successfully.", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error while signing in." });
  }
};
