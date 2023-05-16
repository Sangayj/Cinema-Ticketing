import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./AdminDashboard.css";

const AdminDashboard = () => {
  const history = useNavigate();

  const handleLogout = () => {
    // Perform logout logic, such as clearing session or token

    // Redirect to login page
    history("/Login");
  };
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
    <div className="admin-dashboard">
      <div className="left-panel">
        <Link to="/MovieDetails" className="nav-link">
          Movies
        </Link>
        <Link to="/AdminTheatre" className="nav-link">
          Theatres
        </Link>
        <Link to="/UserInfo" className="nav-link">
          Users
        </Link>
        <button className="nav-link logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="center-panel">
        <h2 className="welcome-message">Welcome to Admin Dashboard!</h2>
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
      </div>
    </div>
  );
};

export default AdminDashboard;
