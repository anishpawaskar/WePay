import mongoose from "mongoose";

export const connectToDb = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to database successfully🚀");
  } catch (err) {
    console.log(err);
    console.log("Error while connecting to database🤕");
  }
};
