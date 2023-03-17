import express from "express";
import * as dotenv from "dotenv";
import { usersRouter } from "./Routes/UsersRoutes.js";
import { connectDB } from "./config/db.js";
import { errorHandle } from "./Middeware/ErrorMiddleware.js";
import { vegetablesRouter } from "./Routes/VegetablesRoutes.js";
import axios from "axios";
import asyncHandler from "express-async-handler";
import requestIp from "request-ip";
import { locationRouter } from "./Routes/LocationRoutes.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //middleware & access req.body data

const PORT = 4000;

app.use("/users", usersRouter);
app.use("/location", locationRouter);
app.use("/vegetables", vegetablesRouter);

app.use(requestIp.mw());
app.use(errorHandle);

app.listen(PORT, (req, res) => {
  console.log(`Express Server running on port ${PORT}!`);
});
