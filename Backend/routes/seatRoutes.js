const express = require("express");
const router = express.Router();

const cinemaController = require("../controllers/cinemaController");

router.get("/api/theatres", cinemaController.getTheatres);
router.get("/api/theatres/:id", cinemaController.getTheatreById);
router.put("/api/theatres/:id/seat/:seatNumber", cinemaController.bookSeat);
router.post("/api/theatres", cinemaController.createTheatre);

module.exports = router;
