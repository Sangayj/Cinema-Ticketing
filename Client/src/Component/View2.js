import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./View.css";

function View2() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [theatre, setTheatre] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        axios
          .get(`http://localhost:8000/api/theatres/${response.data.theatreId}`)
          .then((response) => {
            setTheatre(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!movie || !theatre) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-container">
      <div className="movie-container">
        <div className="image-container">
          <img
            className="movie-image"
            src={`http://localhost:8000/uploads/${movie.filename}`}
            alt={movie.originalname}
          />
        </div>
        <div className="text-container">
          <h2 className="title">{movie.title}</h2>
          <p className="director">Director: {movie.director}</p>
          <p className="cast">Cast: {movie.cast}</p>
          <p className="description">{movie.description}</p>
        </div>
        
      </div>
      <div className="separator"></div>

      <div className="showing-container">
        <h2 className="showing-header">Showing On:</h2>
        <div className="showing-details-container">
          <p className="showing-details">Date: {movie.date}</p>
          <p className="showing-details">Time: {movie.time}</p>
          <p className="showing-details">Theatre: {theatre.name}</p>
          <p className="showing-details">Price: {movie.price} BTN</p>
        </div>
        <Link
          to={`/Login`}
          className="login-button"
        >
          Login
        </Link>
      </div>
    </div>
    
  );
}

export default View2;
