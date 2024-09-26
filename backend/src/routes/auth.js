import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("Signup user");
});
router.post("/signin", (req, res) => {
  res.send("Signin user");
});

export default router;
