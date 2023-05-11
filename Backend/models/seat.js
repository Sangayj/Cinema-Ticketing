const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  seatNumber: {
    type: Number,
    required: true,
  },
  cinemaHall: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CinemaHall",
    required: true,
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    default: null,
  },
});

const Seat = mongoose.model("Seat", seatSchema);

module.exports = Seat;
