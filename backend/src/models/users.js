import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  hashPassword: String,
});

const Users = mongoose.model("users", usersSchema);

export const createNewUserModel = async (userdata) => {
  const newUser = new Users(userdata);
  return newUser.save();
};

export const findUserByUsername = async (username) => {
  const user = await Users.findOne({ username }).exec();
  return user;
};
