import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieDetails() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/movies")
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {movieData.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <p>Actor: {movie.actor}</p>
          <p>Actress: {movie.actress}</p>
          <p>Start Date: {movie.startDate}</p>
          {movie.image && (
            <img
              src={`data:image/png;base64,${movie.image}`}
              alt={movie.name}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default MovieDetails;
