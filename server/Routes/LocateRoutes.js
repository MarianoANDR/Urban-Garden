import express from "express";
import { locateUser } from "../Controllers/LocateController.js";

const router = express.Router();

router.get("/", locateUser);

export { router as locateRouter };
