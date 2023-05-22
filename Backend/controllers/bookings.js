const Booking = require("../models/bookings");

exports.createBooking = async (req, res) => {
  try {
    const {
      theatre,
      name,
      username,
      phone,
      journalCode,
      seatNumber,
      totalPrice,
      movieId,
    } = req.body;

    if (!theatre || !name || !username || !phone || !movieId) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Create a new booking
    const booking = await Booking.create({
      theatre,
      name,
      username,
      phone,
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
