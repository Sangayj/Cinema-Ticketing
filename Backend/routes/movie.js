const express = require("express");

const { uploadTrailer, createMovie } = require("../controllers/movie");
const { isAdmin } = require("../middlewares/auth");
const { uploadVideo, uploadImage } = require("../middlewares/multer");
const router = express.Router();

router.post(
  "/upload-trailer",
  isAdmin,
  uploadVideo.single("video"),
  uploadTrailer
);

router.post("/create", uploadImage.single("poster"), createMovie);

module.exports = router;
