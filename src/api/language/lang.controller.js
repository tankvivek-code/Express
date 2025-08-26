import { lang } from "./lang.model.js";

export const getlanguages = async (req, res) => {
  try {
    const response = await lang.find();
    res.status(200).json({ languages: response });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while getting languages" });
  }
};
export const createlanguages = async (req, res) => {
  try {
    // create sample language
    await lang.create({ lang: "mongoose" });

    res.status(201).json({ message: "Language created successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while creating language" });
  }
};

export const deletelanguage = async (req, res) => {
  try {
    const languageId = req.params.id;

    if (!languageId) {
      return res.status(400).json({ message: "Language ID is required" });
    }

    const deleted = await lang.deleteOne({ _id: languageId });

    if (deleted.deletedCount === 0) {
      return res.status(404).json({ message: "Language not found" });
    }

    res.status(200).json({ message: "Language deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while deleting language" });
  }
};

export const updatelanguages = async (req, res) => {
  try {
    const languageId = req.params.id;
    const data = req.body;

    if (!languageId) {
      return res.status(400).json({ message: "Language ID is required" });
    }

    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ message: "No data provided for update" });
    }

    const updated = await lang.updateOne({ _id: languageId }, data);

    if (updated.matchedCount === 0) {
      return res.status(404).json({ message: "Language not found" });
    }

    res.status(200).json({ message: "Language updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while updating language" });
  }
};
