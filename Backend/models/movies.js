const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  cast: String,
  description: String,
  filename: String,
  originalname: String,
  date: Date,
  time: String,
  theatre: String,
  theatreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theatre",
  },
  price: Number,
});

module.exports = mongoose.model("Movie", movieSchema);
