const cloudinary = require("../cloud");
const Movie = require("../models/movie");

exports.uploadTrailer = async (req, res) => {
  const { file } = req;
  if (!file) return alert(res, "video file is missing");

  const { secure_url: url, public_id } = await cloudinary.uploader.upload(
    file.path,
    {
      resource_type: "video",
    }
  );
  res.status(201).json({ url, public_id });
};

exports.createMovie = async (req, res) => {
  const { file, body } = req;
  const {
    movieName,
    director,
    actor,
    actress,
    releaseDate,
    description,
    poster,
    trailer,
    tags,
  } = body;

  new Movie({
    movieName,
    director,
    actor,
    actress,
    releaseDate,
    description,
    trailer,
    tags,
  });

  const { secure_url: url, public_id } = await cloudinary.uploader.upload(
    file.path
  );
};
