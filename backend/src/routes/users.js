import express from "express";
import { getUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.patch("/self", (req, res) => {
  res.send("update self details");
});

export default router;
