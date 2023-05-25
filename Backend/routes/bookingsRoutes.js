const express = require("express");
const router = express.Router();
const bookingsController = require("../controllers/bookings");

// POST /api/bookings
router.get("/bookings", bookingsController.getBookings);

module.exports = router;
