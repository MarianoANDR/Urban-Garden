import express from "express";
import { getVegsController } from "../Controllers/VegetablesController.js";

const router = express.Router();

router.get("/", getVegsController);

export { router as vegetablesRouter };
