import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { usersRouter } from "./Routes/UsersRoutes.js";

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //middleware & access req.body data

const PORT = 5000;

app.use("/users", usersRouter);

app.listen(PORT, (req, res) => {
  console.log(`Express Server running on port ${PORT}!`);
});
