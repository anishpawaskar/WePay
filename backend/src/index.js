import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";
import { connectToDb } from "./config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectToDb();

app.use(indexRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
