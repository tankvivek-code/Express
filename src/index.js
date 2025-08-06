import express from "express";
import cors from "cors";
import { createUser, getUsers } from "./controller/users.controller.js";
import { getlanguages } from "./controller/language.controller.js";
import { connectDB } from "./config/connectDB.js";

const app = express();
app.use(cors());
connectDB();

const PORT = 8000;

app.get("/get-users", getUsers);
app.post("/create-users", createUser);
app.get("/get-language", getlanguages);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
