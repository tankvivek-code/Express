import express from "express";
import cors from "cors";
import { getUsers } from "./controller/users.controller.js";
import { getlanguages } from "./controller/language.controller.js";

const app = express();
app.use(cors());

const PORT = 8000;

app.get("/get-users", getUsers);
app.get("/get-language", getlanguages);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
