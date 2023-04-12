import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/#" className="navbar-logo">
        <img src="./Images/logo.jpg" alt="Logo" />
      </a>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <a href="/#">Home</a>
        </li>

        <li className="navbar-menu-item">
          <a href="/SignIn">Sign In</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/Login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
