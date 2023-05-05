import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./View.css";

function View() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        console.log(response.data); // Log the movie data to the console
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-container">
      <div className="container">
        <div className="image-container">
          <img
            className="movie-image"
            src={`http://localhost:8000/uploads/${movie.filename}`}
            alt={movie.originalname}
          />
        </div>
        <div className="text-container">
          <h2 className="title">{movie.title}</h2>
          <div className="separator"></div>
          <p className="director">Director: {movie.director}</p>
          <p className="cast">cast: {movie.cast}</p>
          <div className="separator"></div>
          <p className="description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
