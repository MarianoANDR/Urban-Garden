import express from "express"; 
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import User from './Models/UsersModel.js';

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URI);  
         
const PORT = 5000;

app.listen(PORT, (req, res) => {
    console.log(`Express Server running on port ${PORT}!`)
})