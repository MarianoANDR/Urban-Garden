import express from "express";
import { getUsers, createUsers, getUser, modifyUser, deleteUser } from "../Controllers.js/UsersControllers.js";

const router = express.Router();

router.route('/').get(getUsers).post(createUsers);
router.route('/:id').get(getUser).put(modifyUser).delete(deleteUser);

export {router as usersRouter};