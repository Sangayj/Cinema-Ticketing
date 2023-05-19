import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [errorMessage, setErrorMessage] = useState("");
  const searchInputRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleLogout = () => {
    // Clear any authentication data (e.g., token) from local storage or state
    // Example: localStorage.removeItem("token");
    // Example: setAuthenticated(false);

    // Redirect to the login page
    navigate("/Login");
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Prevent the browser from navigating away
    };

    const handlePopstate = () => {
      // Redirect to the login page if not authenticated
      if (location.pathname !== "/Login") {
        navigate("/Login");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [navigate, location.pathname]);

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
        <a className="nav-item" href="/Login" onClick={handleLogout}>
          Logout
        </a>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default Navbar;
