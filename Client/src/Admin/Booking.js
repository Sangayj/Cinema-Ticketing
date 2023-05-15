import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Booking.css";

function Booking() {
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
    <div className="booking">
      {movies.map((movie) => (
        <div className="movies" key={movie._id}>
          <h2 className="moviess">{movie.title}</h2>
          <img
            className="cards-images"
            src={`http://localhost:8000/uploads/${movie.filename}`}
            alt={movie.originalname}
          />
          <Link to="/ViewBooking" className="booking-button">
            View Booking
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Booking;
