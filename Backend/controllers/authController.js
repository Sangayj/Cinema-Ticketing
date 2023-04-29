// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const encrypt = await bcrypt.genSalt(10);
    const hashedconfirmPassword = await bcrypt.hash(confirmPassword, encrypt);

    // Create a new user
    const newUser = new User({
      name,
      username,
      gender,
      email,
      phone,
      password: hashedPassword,
      confirmPassword: hashedconfirmPassword,
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
      return res.status(404).json({ message: "User does not exist" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    // Check if passwords match
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const { _id, name, role } = user;

    const jwtToken = jwt.sign({ userId: _id }, process.env.JWT_SECRET);
    res.json({ user: { id: _id, name, username, role, token: jwtToken } });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Login failed" });
  }
}

module.exports = {
  SignUp,
  Login,
};
