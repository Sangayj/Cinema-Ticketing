// controllers/authController.js

const User = require("../models/Users");

async function SignUp(req, res) {
  try {
    const { name, username, gender, email, phone, password, confirmPassword } =
      req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // Create a new user
    const newUser = new User({
      name,
      username,
      gender,
      email,
      phone,
      password,
      confirmPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "An error occurred while signing up" });
  }
}

async function Login(req, res) {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Login successful
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Login failed" });
  }
}

module.exports = {
  SignUp,
  Login,
};
