// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Sign-up route
router.post("/SignUp", authController.SignUp);

// Login route
router.post("/Login", authController.Login);



module.exports = router;
