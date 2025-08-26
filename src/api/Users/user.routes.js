import { Router } from "express";
import {
  createUser,
  deleteuser,
  getUsers,
  updateuser,
} from "./user.controller.js";

const userRoutes = Router();

userRoutes.get("/get-users", getUsers);
userRoutes.post("/create-users", createUser);
userRoutes.delete("/delete-user/:id", deleteuser);
userRoutes.put("/update-user/:id", updateuser);

export default userRoutes;
