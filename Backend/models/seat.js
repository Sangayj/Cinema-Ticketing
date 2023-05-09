const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["available", "booked"],
    default: "available",
  },
  price: {
    type: Number,
    required: true,
  },
});

const Seat = mongoose.model("Seat", seatSchema);

module.exports = Seat;
