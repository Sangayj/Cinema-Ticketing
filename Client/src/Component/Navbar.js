import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <nav className="navbar">
      <a href="/#" className="navbar-logo">
        <img src="./Images/logo.png" alt="Logo" />
      </a>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => {
              handleLinkClick("home");
            }}
            className={activeLink === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/signin"
            onClick={() => {
              handleLinkClick("signin");
            }}
            className={activeLink === "signin" ? "active" : ""}
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            onClick={() => {
              handleLinkClick("login");
            }}
            className={activeLink === "login" ? "active" : ""}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
