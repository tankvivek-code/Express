import mongoose from "mongoose";

const MONGO_DB_URI = "mongodb://127.0.0.1:27017/demo";

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("MongoDB connect");
  } catch (error) {
    console.log("Error while connectinf database", error.message);
  }
}
