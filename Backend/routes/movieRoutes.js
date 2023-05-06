const express = require("express");
const movieController = require("../controllers/movieController");
const uploadMiddleware = require("../middlewares/upload");

const router = express.Router();

router.post("/upload", uploadMiddleware, movieController.uploadMovie);

router.get("/movies", movieController.getMovies);

router.get("/api/movies/:id", movieController.getMovieById);

// Delete movie by ID
router.delete("/api/movies/:id", movieController.deleteMovieById);

// Update movie by ID
router.put("/api/movies/:id", movieController.updateMovieById);

module.exports = router;
