import express from "express";
import cors from "cors";
import {
  createUser,
  deleteuser,
  getUsers,
  updateuser,
} from "./controller/users.controller.js";
import {
  createlanguages,
  getlanguages,
} from "./controller/language.controller.js";
import { connectDB } from "./config/connectDB.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = 8000;

app.get("/get-users", getUsers);
app.post("/create-users", createUser);
app.get("/get-language", getlanguages);
app.post("/create-language", createlanguages);
app.delete("/delete-user/:id", deleteuser);
app.put("/update-user/:id", updateuser);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
