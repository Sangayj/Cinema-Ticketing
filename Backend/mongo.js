const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://jamtsho:sangay@cinema.cupetj2.mongodb.net/test")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
    const express = require("express");
  });

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
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

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
