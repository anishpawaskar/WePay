import express from "express";
import {
  getUserAccountBalance,
  transferFunds,
} from "../controllers/accounts.js";
import { authMiddleWare } from "../middlewares/auth.js";
import { transferFundsValidators } from "../middlewares/validators/accounts.js";

const router = express.Router();

router.get("/balance", authMiddleWare, getUserAccountBalance);
router.post(
  "/transfer",
  authMiddleWare,
  transferFundsValidators,
  transferFunds
);

export default router;
