const CinemaHall = require("../models/cinemaHall");
const Seat = require("../models/seat");
const Movie = require("../models/movies");

exports.createCinemaHall = async (req, res) => {
  const { name, seats } = req.body;

  const cinemaHall = new CinemaHall({
    name,
    seats,
  });

  try {
    await cinemaHall.save();
    res.status(201).json(cinemaHall);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.assignSeatToMovieAndCinemaHall = async (req, res) => {
  const { cinemaHallId, movieId } = req.body;

  try {
    const cinemaHall = await CinemaHall.findById(cinemaHallId);
    const unassignedSeat = await Seat.findOne({
      cinemaHall: cinemaHall._id,
      movie: null,
    });

    if (!unassignedSeat) {
      return res.status(404).json({ message: "No unassigned seats available" });
    }

    unassignedSeat.movie = movieId;
    await unassignedSeat.save();
    cinemaHall.assignedSeats.push(unassignedSeat._id);
    await cinemaHall.save();

    res.json(unassignedSeat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCinemaHalls = async (req, res) => {
  try {
    const cinemaHalls = await CinemaHall.find();
    res.json(cinemaHalls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllSeatsForCinemaHall = async (req, res) => {
  const { id } = req.params;

  try {
    const cinemaHall = await CinemaHall.findById(id).populate("assignedSeats");
    res.json(cinemaHall.assignedSeats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
