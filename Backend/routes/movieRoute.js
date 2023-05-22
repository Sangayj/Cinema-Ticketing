const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { createMovie } = require("../controllers/movieController");

// multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// POST /api/movies
router.post("/Movies", upload.single("poster"), createMovie);

module.exports = router;
