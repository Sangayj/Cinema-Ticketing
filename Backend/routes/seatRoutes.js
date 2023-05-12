const express = require("express");
const router = express.Router();
const {
  bookSeat,
  getSeats,
  createSeat,
} = require("../controllers/seatController");

router.post("/api/seats/book", bookSeat);
router.get("/api/seats", getSeats);
router.post("/api/seats/create", createSeat);

module.exports = router;
