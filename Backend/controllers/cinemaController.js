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
exports.bookSeat = (req, res) => {
  const theatreId = req.params.id;
  const seatNumber = req.params.seatNumber;

  Theatre.findById(theatreId)
    .then((theatre) => {
      const seatIndex = theatre.assignedSeats.findIndex(
        (seat) => seat.seatNumber === +seatNumber
      );
      if (seatIndex === -1) {
        return res.status(404).send("Seat not found");
      }
      if (theatre.assignedSeats[seatIndex].status === "booked") {
        return res.status(400).send("Seat already booked");
      }

      theatre.assignedSeats[seatIndex].status = "booked";
      theatre
        .save()
        .then(() => {
          res.send("Seat booked successfully");
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("Internal server error");
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

exports.updateTheatre = (req, res) => {
  const theatreId = req.params.id;
  const updatedTheatre = req.body;

  // Update the theatre in the database with an empty assignedSeats array
  Theatre.findByIdAndUpdate(theatreId, {
    assignedSeats: [],
  })
    .then(() => {
      res.send("Theatre updated successfully");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating theatre");
    });
};
exports.makeTheatreAvailable = (req, res) => {
  const theatreId = req.params.id;

  // Update the theatre in the database with an empty assignedSeats array
  Theatre.findByIdAndUpdate(theatreId, {
    assignedSeats: [],
  })
    .then(() => {
      res.send("Theatre is now available for booking");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating theatre");
    });
};
