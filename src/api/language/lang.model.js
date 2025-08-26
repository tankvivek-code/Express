import { model, Schema } from "mongoose";

const languageschema = Schema({
  lang: String,
});

export const lang = model("lang", languageschema);
