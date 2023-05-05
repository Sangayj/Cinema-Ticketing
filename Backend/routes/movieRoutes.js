const express = require("express");
const movieController = require("../controllers/movieController");
const uploadMiddleware = require("../middlewares/upload");

const router = express.Router();

router.post("/upload", uploadMiddleware, movieController.uploadMovie);
router.get("/movies", movieController.getMovies);
router.get("/api/movies/:id", movieController.getMovieById);
module.exports = router;
