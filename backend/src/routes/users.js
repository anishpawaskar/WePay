import express from "express";
import { getUsers } from "../controllers/users.js";
import { getUsersValidator } from "../middlewares/validators/users.js";
import { authMiddleWare } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", authMiddleWare, getUsersValidator, getUsers);
router.patch("/self", (req, res) => {
  res.send("update self details");
});

export default router;
