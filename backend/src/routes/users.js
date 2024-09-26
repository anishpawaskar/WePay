import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all users");
});
router.patch("/self", (req, res) => {
  res.send("update self details");
});

export default router;
