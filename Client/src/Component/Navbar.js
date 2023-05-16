import React, { useRef, useState } from "react";
import axios from "axios";
import "./Navbar.css";

function Navbar() {
  const [errorMessage, setErrorMessage] = useState("");
  const searchInputRef = useRef();

  const searchMovies = async () => {
    const searchQuery = searchInputRef.current.value;
    try {
      const response = await axios.get(
        `http://localhost:8000/movies?search=${searchQuery}`
      );
      if (response.data.length === 0) {
        setErrorMessage("Movie not found");
      } else {
        setErrorMessage("");
        const movie = response.data[0]; // Assuming the first movie is the desired result
        window.open(`/movies/${movie.id}`, "_blank");
      }
    } catch (error) {
      setErrorMessage("An error occurred");
      console.error(error);
    }
  };

  const handleSearchButtonClick = () => {
    const searchQuery = searchInputRef.current.value;
    if (searchQuery) {
      // Perform movie search
      searchMovies();
    } else {
      setErrorMessage("Please enter a search query");
    }
  };

  return (
    <div className="navbar-container">
      <a href="/#" className="navbar-logo">
        <img src="./Image/logo.png" alt="Logo" className="navbar-logo-img" />
      </a>
      <div className="navbar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies"
          ref={searchInputRef}
        />
        <button className="search-button" onClick={handleSearchButtonClick}>
          Search
        </button>
        <a className="nav-item" href="/Login">
          Login
        </a>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Navbar;
