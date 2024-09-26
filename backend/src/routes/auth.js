import express from "express";
import { signupUser } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", (req, res) => {
  res.send("Signin user");
});

export default router;
