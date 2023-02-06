import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a Username']
    },
    password: {
        type: String,
        required: [true, 'Please enter a Password']
    }
})

export default mongoose.model('User', userSchema);