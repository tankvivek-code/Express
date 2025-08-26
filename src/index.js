import express from "express";
import cors from "cors";
import { connectDB } from "./config/connectDB.js";
import userRoutes from "./api/Users/user.routes.js";
import langRouter from "./api/language/lang.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT;

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/lang", langRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
