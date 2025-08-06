import { lang } from "../model/lang.model.js";

export const getlanguages = async (req, res) => {
  try {
    const resposne = await lang.find();
    res.status(201).json({ lang: resposne });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while getting lang" });
  }
};

export const createlanguages = async (req, res) => {
  try {
    await lang.create({ lang: "mongoose" });
    res.status(201).json({ message: "lang created !" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while creating lang" });
  }
};
