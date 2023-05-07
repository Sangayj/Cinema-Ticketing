const Movie = require("../models/movies");

exports.uploadMovie = (req, res) => {
  const { title, director, cast, description, } = req.body;
  const { filename, originalname } = req.file;

  const movie = new Movie({
    title,
    director,
    cast,
    description,
    filename,
    originalname,
  });

  movie
    .save()
    .then((savedMovie) => {
      res.json({ message: "Movie uploaded successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to save movie" });
    });
};

exports.getMovies = (req, res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve movies" });
    });
};

exports.getMovieById = (req, res) => {
  const movieId = req.params.id;

  exports.getMovieById = (req, res) => {
    const movieId = req.params.id;

    Movie.findById(movieId)
      .then((movie) => {
        if (!movie) {
          return res.status(404).json({ error: "Movie not found" });
        }

        // Create the image URL using the filename property
        const imageUrl = `http://localhost:8000/uploads/${movie.filename}`;

        // Modify this response structure based on your movie data
        const movieData = {
          title: movie.title,
          director: movie.director,
          cast: movie.cast,
          description: movie.description,
          image: {
            url: imageUrl,
            alt: movie.originalname,
          },
          // Add other movie properties as needed
        };

        res.json(movieData);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  };
};
exports.getMovieById = (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ error: "Movie not found" });
      }
      res.json(movie);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};
