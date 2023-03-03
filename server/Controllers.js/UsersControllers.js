import User from "../Models/UsersModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";

//  Register new user /users/register **
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  //Check if all fields are filled
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Plase fill in the missing details");
  }

  //Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//  Authenticate user /users/login **
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
};

//  Get user data /users/me **
export const getMe = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    username,
    email,
  });
});

//  Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// export const getUsers = async (req, res) => {
//     try {
//     const users = await User.find();
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(400).json({error: err.message});
//     }
// }

// export const getUser = async (req, res) => {
//     try {
//     const user = await User.findOne({_id: req.params.id});
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(400).json({error: err.message});
//     }
// }

// export const modifyUser = async (req, res) => {
//     try {
//     const user = await User.findOne({_id: req.params.id});
//     const {username, email, password} = req.body;
//         user.username = username
//         user.email = email
//         user.password = password
//     user.save();
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(400).json({error: err.message});
//     }
// }

// export const deleteUser = async (req, res) => {
//     try {
//     const user = await User.findByIdAndRemove({_id: req.params.id});
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(400).json({error: err.message});
//     }
// }
