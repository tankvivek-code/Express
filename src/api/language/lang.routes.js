import { Router } from "express";
import {
  createlanguages,
  deletelanguage,
  getlanguages,
  updatelanguages,
} from "./lang.controller.js";

const langRouter = Router();

langRouter.get("/get-language", getlanguages);
langRouter.post("/create-language", createlanguages);
langRouter.delete("/delete-language/:id", deletelanguage);
langRouter.put("/update-language/:id", updatelanguages);

export default langRouter;
