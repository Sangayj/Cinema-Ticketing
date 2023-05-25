import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { AuthContext } from "../context/Authcontext";

function Search() {
  const {currentUser} = useContext(AuthContext)
   // Display user ID in the console
   console.log(currentUser)
 const locate = useLocation()
 const search_text = locate.state

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
      {movies.filter((i) => i.title === search_text).map((movie) => (
        <div className="card" key={movie._id}>
          <img
            className="card-image"
            src={`http://localhost:8000/uploads/${movie.filename}`}
            alt={movie.originalname}
          />
          <div className="card-title">{movie.title}</div>
          <Link
            to={`/View/${movie._id}`}
            state={{movieId: movie._id,
             userId: currentUser.userId}}
            className="view-button"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Search;
