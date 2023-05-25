const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  theatreId: {
    type: String,
    ref: "Movie",
    required: true,
  },
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  journalCode: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  movieId: {
    type: String,
    ref: "Movie",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'cancelled'],
    default: 'pending'
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
