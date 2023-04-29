const express = require("express");
const { uploadTrailer } = require("../controllers/movie");
const { isAdmin } = require("../middlewares/auth");
const { uploadVideo } = require("../middlewares/multer");
const router = express.Router();

router.post(
  "/upload-trailer",
  isAdmin,
  uploadVideo.single("video"),
  uploadTrailer
);

module.exports = router;
