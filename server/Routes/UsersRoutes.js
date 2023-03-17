import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../Controllers/UsersControllers.js";
import protect from "../Middeware/AuthMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export { router as usersRouter };
