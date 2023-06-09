// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },

  gender: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
