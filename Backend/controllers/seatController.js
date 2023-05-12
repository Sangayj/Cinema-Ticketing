const Seat = require("../models/seat");

const bookSeat = async (req, res) => {
  const { seatNumber } = req.body;

  try {
    const seat = await Seat.findOne({ number: seatNumber });
    if (!seat) {
      return res.status(404).json({ error: "Seat not found" });
    }
    if (seat.status === "booked") {
      return res.status(409).json({ error: "Seat is already booked" });
    }
    seat.status = "booked";
    await seat.save();
    return res.json(seat);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const getSeats = async (req, res) => {
  try {
    const seats = await Seat.find();
    return res.json(seats);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const createSeat = async (req, res) => {
  const { number, price } = req.body;

  try {
    const seat = await Seat.create({ number, price });
    return res.json(seat);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { bookSeat, getSeats, createSeat };
