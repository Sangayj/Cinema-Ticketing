import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieDetails.css";

function MovieDetails() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <table className="movies-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Title</th>
            <th>Director</th>
            <th>Cast</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie._id}>
              <td>{index + 1}</td>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.cast}</td>
              <td>
                <img
                  src={`http://localhost:8000/uploads/${movie.filename}`}
                  alt={movie.originalname}
                  className="movie-image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieDetails;
