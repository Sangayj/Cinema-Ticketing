const express = require("express");
const router = express.Router();

const cinemaController = require("../controllers/cinemaController");

router.get("/api/cinema-halls/:id", cinemaController.getCinemaHallById);

module.exports = router;

router.post("/api/cinema-halls", cinemaController.createCinemaHall);

router.post("/api/seats", cinemaController.assignSeatToMovieAndCinemaHall);

router.get("/api/cinema-halls", cinemaController.getAllCinemaHalls);

router.get(
  "/cinema-halls/:id/seats",
  cinemaController.getAllSeatsForCinemaHall
);

module.exports = router;
