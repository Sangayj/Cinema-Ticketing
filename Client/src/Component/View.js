import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import "./View.css";

function View(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [theatre, setTheatre] = useState(null);
  const { name, username, phone } = props;

  useEffect(() => {
    console.log("Received name:", name);
    console.log("Received username:", username);
    console.log("Received phone:", phone);
  }, [name, username, phone]);

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
          to={{
            pathname: `/Book/${theatre._id}`,
            search: `?price=${movie.price}&title=${encodeURIComponent(
              movie.title
            )}&date=${encodeURIComponent(movie.date)}&time=${encodeURIComponent(
              movie.time
            )}&theatre=${encodeURIComponent(theatre.name)}`,
            state: {
              movieId: movie._id,
              name: name,
              username: username,
              phone: phone,
            },
          }}
          className="book-now-button"
        >
          Book Now
        </Link>
      </div>{" "}
    </div>
  );
}

export default View;
