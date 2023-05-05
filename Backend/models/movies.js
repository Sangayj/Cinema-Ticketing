const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  actor: String,
  actress: String,
  description: String,
  filename: String,
  originalname: String,
});

module.exports = mongoose.model("Movie", movieSchema);
