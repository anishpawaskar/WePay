import express from "express";

const router = express.Router();

router.get("/balance", (req, res) => {
  res.send("Ger user balance");
});
router.post("/transfer", (req, res) => {
  res.send("Transfer funds");
});
