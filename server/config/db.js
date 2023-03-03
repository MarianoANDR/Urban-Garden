import mongoose from "mongoose"; //asynchronous
 
export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
} 