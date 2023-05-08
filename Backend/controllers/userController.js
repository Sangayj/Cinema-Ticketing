const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/Users");

exports.SignUp = async (req, res) => {
  try {
    const {
      role,
      name,
      username,
      gender,
      email,
      phone,
      password,
      confirmPassword,
    } = req.body; // Check if the email already exists
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
      role,
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
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "name username email  phone password ");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, username, email, password, phone } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user properties
    user.name = name || user.name;
    user.username = username || user.username;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Save updated user to the database
    const updatedUser = await user.save();
    res.json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the user" });
  }
};

exports.Login = async (req, res) => {
  try {
    const { username, password } = req.body; // Check if the user exists
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
    let secretKey = "secretKey";
    if (user.role === "admin") {
      secretKey = "adminSecretKey";
    }
    const token = jwt.sign({ id: user._id, role: user.role }, secretKey);

    // Send the token and user type in the response
    return res.status(200).json({ token, userType: user.role });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Login failed" });
  }
};
