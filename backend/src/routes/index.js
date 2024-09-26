import express from "express";
import authRoute from "./auth.js";

const app = express.Router();

app.use("/v1/auth", authRoute);

export default app;
