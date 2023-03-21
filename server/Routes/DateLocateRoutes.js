import express from "express";
import { dateLocateUser } from "../Controllers/DateLocateController.js";

const router = express.Router();

router.get("/", dateLocateUser);

export { router as dateLocateRouter };
