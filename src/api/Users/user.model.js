import { model, Schema } from "mongoose";

const userschema = Schema({
  username: String,
  password: String,
  mobile: Number,
});

export const user = model("user", userschema);
