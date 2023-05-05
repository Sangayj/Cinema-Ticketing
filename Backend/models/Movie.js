// models/movie.js

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  poster: {
    type: Buffer,
    required: true
  },
  movieName: {
    type: String,
    required: true
  },
  actors: {
    type: [String],
    required: true
  },
  producer: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
