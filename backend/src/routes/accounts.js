import express from "express";
import { getUserAccountBalance } from "../controllers/accounts.js";
import { authMiddleWare } from "../middlewares/auth.js";

const router = express.Router();

router.get("/balance", authMiddleWare, getUserAccountBalance);
router.post("/transfer", (req, res) => {
  res.send("Transfer funds");
});

export default router;
