import { Request, Response } from "express";
import { User } from "../models/user.model";

// create user
const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email required" });
    }

    const user = await User.create({ name, email });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// get users
const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "Users not found" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export { createUser, getUsers };