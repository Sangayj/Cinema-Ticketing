import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

function Home() {
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
          <div className="title">{movie.title}</div>
          <img
            className="card-image"
            src={`http://localhost:8000/uploads/${movie.filename}`}
            alt={movie.originalname}
          />{" "}
          <div className="card-title">{movie.title}</div>
          <Link to={`/View2/${movie._id}`} className="view-button">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
