import express from "express";
import { seasonListController } from "../Controllers/seasonListController.js";

const router = express.Router();

router.get("/", seasonListController);

export { router as seasonListRouter };
