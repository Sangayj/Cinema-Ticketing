const Booking = require("../models/bookings");

exports.createBooking = async (req, res) => {
  try {
    const { userId, movieId, theatreId } = req.body; // Use req.body to access the values directly

    const { journalCode, seatNumber, totalPrice } = req.body;

    if (
      !theatreId ||
      !userId ||
      !journalCode ||
      !seatNumber ||
      !totalPrice ||
      !movieId
    ) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const booking = await Booking.create({
      theatreId,
      userId,
      journalCode,
      seatNumber,
      totalPrice,
      movieId,
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the booking." });
  }
};
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error("Error retrieving bookings:", error);
    res.status(500).json({ error: "Failed to retrieve bookings." });
  }
};
