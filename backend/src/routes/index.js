import express from "express";
import authRoute from "./auth.js";
import usersRoute from "./users.js";
import accountsRoute from "./accounts.js";

const app = express.Router();

app.use("/v1/auth", authRoute);
app.use("/v1/users", usersRoute);
app.use("/v1/accounts", accountsRoute);

export default app;
