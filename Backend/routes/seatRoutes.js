const express = require("express");
const router = express.Router();

const cinemaController = require("../controllers/cinemaController");
// Backend
router.get("/api/theatres", cinemaController.getTheatres);
router.get("/api/theatres/:id", cinemaController.getTheatreById);
router.put("/api/theatres/:id/seat/:seatNumbers", cinemaController.bookSeats);
router.post("/api/theatres", cinemaController.createTheatre);
router.delete("/api/theatres/:id", cinemaController.deleteTheatre);
router.put("/api/theatres/:theatreId/reset", cinemaController.resetTheatre);

module.exports = router;