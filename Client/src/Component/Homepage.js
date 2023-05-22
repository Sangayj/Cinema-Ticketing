import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { AuthContext } from "../context/Authcontext";

function Homepage() {
  const { currentUser } = useContext(AuthContext);
  console.log("User ID:", currentUser._id); // Display user ID in the console

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
    <div className="card-container">
      {movies.map((movie) => (
        <div className="card" key={movie._id}>
          <img
            className="card-image"
            src={`http://localhost:8000/uploads/${movie.filename}`}
            alt={movie.originalname}
          />
          <div className="card-title">{movie.title}</div>
          <Link
            to={{
              pathname: `/View/${movie._id}`,
              state: {
                userId: currentUser._id, // Pass the user ID as a state parameter
              },
            }}
            className="view-button"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
