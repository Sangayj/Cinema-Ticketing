const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateRandomCode = require("./random_code");
const randomCode = generateRandomCode();
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
    } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const hashedConfirmPassword = await bcrypt.hash(
      confirmPassword,
      saltRounds
    );

    const newUser = new User({
      role,
      name,
      username,
      gender,
      email,
      phone,
      password: hashedPassword,
      confirmPassword: hashedConfirmPassword,
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
    const users = await User.find({}, "name username email phone password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.json(user);
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

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.username = username || user.username;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    if (password) {
      const saltRounds = 10;
      user.password = await bcrypt.hash(password, saltRounds);
    }

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
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const secretKey = user.role === "admin" ? "adminSecretKey" : "secretKey";
    const token = jwt.sign({ id: user._id, role: user.role }, secretKey);

    return res.status(200).json({ token, userType: user.role });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Login failed" });
  }
};

async function authenticate(req, res, next) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    req.user = {
      username: user.username,
      gender: user.gender,
      email: user.email,
      phone: user.phone,
      role: user.role,
      id: user._id, // Add the user ID to the request object
    };

    console.log("User ID:", user._id); // Log the user ID in the console
    return next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    return res
      .status(500)
      .json({ error: "An error occurred during authentication" });
  }
}
(exports.Login = authenticate),
  async (req, res) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User does not exist" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password" });
      }

      const { username, email, phone, role } = req.user;
      const token = jwt.sign({ username, email, phone, role }, randomCode);

      res.json({ token });
    } catch (error) {
      console.error("Error logging in:", error);
      return res.status(500).json({ error: "Login failed" });
    }
  };
