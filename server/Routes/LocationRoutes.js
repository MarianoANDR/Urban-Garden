import express from "express";
import { locateUser } from "../Controllers/LocationController.js";

const router = express.Router();

router.get("/", locateUser);

export { router as locationRouter };
