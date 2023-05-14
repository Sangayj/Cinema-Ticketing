const Theatre = require("../models/theatre");

exports.getTheatreById = async (req, res) => {
  try {
    const theatre = await Theatre.findById(req.params.id);
    if (!theatre) {
      return res.status(404).json({ error: "Theatre not found" });
    }
    return res.json(theatre);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};
// controllers/theatreController.js

exports.getTheatres = async (req, res) => {
  try {
    const theatres = await Theatre.find();
    res.status(200).json(theatres);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.createTheatre = async (req, res) => {
  const { name, seats } = req.body;

  const newTheatre = new Theatre({
    name,
    seats,
    assignedSeats: [],
  });

  for (let i = 1; i <= seats; i++) {
    newTheatre.assignedSeats.push({
      seatNumber: i,
      status: "available",
    });
  }

  try {
    const theatre = await newTheatre.save();
    res.status(201).json(theatre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.bookSeats = (req, res) => {
  const theatreId = req.params.id;
  const seatNumbers = req.params.seatNumbers.split(",");

  Theatre.findById(theatreId)
    .then((theatre) => {
      const bookedSeats = [];
      let error = false;

      seatNumbers.forEach((seatNumber) => {
        const seatIndex = theatre.assignedSeats.findIndex(
          (seat) => seat.seatNumber === +seatNumber
        );
        if (seatIndex === -1) {
          error = true;
          return res.status(404).send(`Seat ${seatNumber} not found`);
        }
        if (theatre.assignedSeats[seatIndex].status === "booked") {
          error = true;
          return res.status(400).send(`Seat ${seatNumber} already booked`);
        }

        theatre.assignedSeats[seatIndex].status = "booked";
        bookedSeats.push(seatNumber);
      });

      if (!error) {
        theatre
          .save()
          .then(() => {
            res.send(`Seats ${bookedSeats.join(",")} booked successfully`);
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Internal server error");
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};
exports.deleteTheatre = async (req, res) => {
  try {
    const theatre = await Theatre.findByIdAndDelete(req.params.id);
    if (!theatre) {
      return res.status(404).json({ error: "Theatre not found" });
    }
    return res.json(theatre);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.resetTheatre = async (req, res) => {
  try {
    const theatre = await Theatre.findById(req.params.theatreId);
    if (!theatre) {
      return res.status(404).json({ msg: "Theatre not found" });
    }

    // Reset all seats to "available"
    theatre.assignedSeats = theatre.assignedSeats.map((seat) => {
      return { ...seat, status: "available" };
    });

    const updatedTheatre = await theatre.save();

    res.json(updatedTheatre);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
