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
