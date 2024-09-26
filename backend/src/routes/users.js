import express from "express";
import { getUsers, updateUser } from "../controllers/users.js";
import {
  getUsersValidator,
  updateUserValidator,
} from "../middlewares/validators/users.js";
import { authMiddleWare } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", authMiddleWare, getUsersValidator, getUsers);
router.patch("/self", authMiddleWare, updateUserValidator, updateUser);

export default router;
