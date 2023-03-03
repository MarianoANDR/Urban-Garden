import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { usersRouter } from "./Routes/UsersRoutes.js";
import { errorHandle } from "./Middeware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import { readFile } from "fs/promises";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //middleware & access req.body data

const PORT = 3000;

app.use("/users", usersRouter);

app.get("/vegs", async (req, res) => {
  const veg = JSON.parse(
    await readFile(new URL("./data.json", import.meta.url))
  );
  res.json(veg);
});

app.use(errorHandle);

app.listen(PORT, (req, res) => {
  console.log(`Express Server running on port ${PORT}!`);
});
