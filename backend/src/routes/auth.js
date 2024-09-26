import express from "express";
import { signinUser, signupUser } from "../controllers/auth.js";
import { signupUserValidator } from "../middlewares/validators/auth.js";

const router = express.Router();

router.post("/signup", signupUserValidator, signupUser);
router.post("/signin", signinUser);

export default router;
