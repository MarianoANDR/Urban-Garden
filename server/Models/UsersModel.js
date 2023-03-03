import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a Username"],
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a Password"],
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("User", userSchema);
