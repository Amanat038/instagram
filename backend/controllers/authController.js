import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, country } = req.body;

    if (!fullName || !email || !password || !country) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check duplicate email
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      country
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass)
      return res.status(400).json({ msg: "Incorrect Password" });

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
      expiresIn: "2d",
    });

    res.json({
      msg: "Login Successful",
      token,
      user: {
        fullName: user.fullName,
        email: user.email,
        country: user.country
      }
    });

  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
