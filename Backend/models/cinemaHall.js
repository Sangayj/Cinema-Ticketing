const mongoose = require("mongoose");

const cinemaHallSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  seats: {
    type: Number,
    required: true,
  },
  assignedSeats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seat",
    },
  ],
});

const CinemaHall = mongoose.model("CinemaHall", cinemaHallSchema);

module.exports = CinemaHall;
