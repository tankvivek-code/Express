import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_DB_URI = process.env.MONGO_DB_URI;

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
  }
}
