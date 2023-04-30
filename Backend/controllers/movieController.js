const Movie = require("../models/Movie");

async function movies(req, res) {
    try {
      const { movieName, actors, producer, description, startDate, endDate } =
        req.body;
  
      const newMovie = new Movie({
        movieName, actors, producer, description, startDate, endDate});
      await newMovie.save();
  
      res.status(201).json({ message: "Movie added to database" });
    } catch (error) {
      console.error("Error adding movie:", error);
      res.status(500).json({ error: "Error adding movie to database" });
    }
  }
  
  module.exports = {
movies  };
  
  
  