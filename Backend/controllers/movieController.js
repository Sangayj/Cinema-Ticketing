const Movie = require("../models/Movie");

// POST /api/movies
exports.createMovie = async (req, res) => {
  try {
    const {
      movieName,
      actors,
      producer,
      description,
      startDate,
      endDate,
    } = req.body;

    // create new movie object
    const newMovie = new Movie({
      movieName,
      actors,
      producer,
      description,
      startDate,
      endDate,
    });

    // add poster to new movie object
    if (req.file) {
      newMovie.poster = req.file.filename;
    }

    // save the new movie object to the database
    const savedMovie = await newMovie.save();

    // send the saved movie object as response
    res.status(201).json(savedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
