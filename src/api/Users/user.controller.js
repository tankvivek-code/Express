import { user } from "./user.model.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const response = await user.find();
    res.status(200).json({ users: response });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while getting users" });
  }
};

export const createUser = async (req, res) => {
  try {
    // create sample user
    await user.create({
      username: "Rahul",
      password: "123",
      mobile: "1234567890",
    });

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while creating user" });
  }
};

export const deleteuser = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const deleted = await user.deleteOne({ _id: userId });

    if (deleted.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while deleting user" });
  }
};

export const updateuser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ message: "No data provided for update" });
    }

    const updated = await user.updateOne({ _id: userId }, data);

    if (updated.matchedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while updating user" });
  }
};
