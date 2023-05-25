import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  // Set isLoggedIn state based on current location
  useEffect(() => {
    if (location.pathname === "/") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [location]);

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

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="navbar-container">
      <a href="/#" className="navbar-logo">
        <img src="./Image/logo.png" alt="Logo" className="navbar-logo-img" />
      </a>
      <nav className="navbar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <Link className="search-button" to="/search" state={searchQuery}>
          Search
        </Link>
        <a className="nav-item" href="/Login" onClick={handleLogout}>
          Logout
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
