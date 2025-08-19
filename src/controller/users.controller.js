import { user } from "../model/users.model.js";

export const getUsers = async (req, res) => {
  try {
    const resposne = await user.find();
    res.status(201).json({ users: resposne });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while getting user" });
  }
};

export const createUser = async (req, res) => {
  try {
    await user.create({ username: "Vivek", password: "123" });
    res.status(201).json({ message: "User created !" });
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
      res
        .status(400)
        .json({ message: "User not Found! Please give exist user id..." });
      return;
    }

    await user.deleteMany();
    res.status(201).json({ message: "User Deleted..." });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while delete user" });
  }
};

export const updateuser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;

    if (!data) {
      res.status(400).json({ message: "No data to update" });
      return;
    }

    if (!userId) {
      res
        .status(400)
        .json({ message: "User not Found! Please give exist user id..." });
      return;
    }

    await user.updateOne({ _id: userId }, data);
    res.status(201).json({ message: "User Updated..." });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message || "Error while delete user" });
  }
};
