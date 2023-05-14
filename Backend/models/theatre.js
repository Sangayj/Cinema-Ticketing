const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  seats: {
    type: Number,
    required: true,
  },

  assignedSeats: {
    type: [
      {
        seatNumber: {
          type: Number,
          required: true,
        },
        status: {
          type: String,
          enum: ["available", "booked"],
          default: "available",
        },
      },
    ],
    default: [],
  },
});
const Theatre = mongoose.model("Theatre", theatreSchema);

module.exports = Theatre;