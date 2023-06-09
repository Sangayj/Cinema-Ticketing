const Movie = require("../models/movies");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Theatre = require("../models/theatre");

exports.uploadMovie = async (req, res) => {
  try {
    const theatre = await Theatre.findById(req.body.theatreId);
    if (!theatre) {
      return res.status(404).json({ error: "Theatre not found" });
    }

    const movie = new Movie({
      title: req.body.title,
      director: req.body.director,
      cast: req.body.cast,
      description: req.body.description,
      filename: req.file.filename,
      originalname: req.file.originalname,
      date: req.body.date,
      time: req.body.time,
      theatre: theatre.name,
      theatreId: theatre._id,
      price: req.body.price,
    });

    await movie.save();

    res.status(201).json({ message: "Movie uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getMovies = (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve movies" });
    });
};

exports.getMovieById = (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
      }

      // Create the image URL using the filename property
      const imageUrl = `http://localhost:8000/uploads/${movie.filename}`;

      // Modify this response structure based on your movie data
      const movieData = {
        title: movie.title,
        director: movie.director,
        cast: movie.cast,
        description: movie.description,
        date: movie.date,
        time: movie.time,
        theatre: movie.theatre,
        price: movie.price,
        image: {
          url: imageUrl,
          alt: movie.originalname,
        },
        // Add other movie properties as needed
      };

      res.json(movieData);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};
exports.getMovieById = (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
      }
      res.json(movie);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

// Delete movie by ID

// Delete movie by ID
exports.deleteMovieById = async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({ _id: req.params.id });
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update movie by ID

const fs = require("fs");
const path = require("path");

exports.updateMovieById = async (req, res) => {
  try {
    const { title, director, cast, date, time, description, price } = req.body;
    const movieId = req.params.id;
    if (!ObjectId.isValid(movieId)) {
      return res.status(400).json({ message: "Invalid movie id" });
    }
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    movie.title = title || movie.title;
    movie.director = director || movie.director;
    movie.cast = cast || movie.cast;
    movie.date = date || movie.date;
    movie.time = time || movie.time;
    movie.description = description || movie.description;
    movie.price = price || movie.price;
    if (req.file) {
      const oldImageFilePath = path.join(
        __dirname,
        "..",
        "uploads",
        movie.filename
      );
      fs.unlinkSync(oldImageFilePath); // delete the old image file
      movie.filename = req.file.filename;
      movie.originalname = req.file.originalname;
    }
    const updatedMovie = await movie.save();
    res.json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.searchMovies = async (req, res) => {
  const searchQuery = req.query.search;

  try {
    const movies = await Movie.find({
      title: { $regex: searchQuery, $options: "i" },
    });
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};
