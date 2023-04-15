import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/#" className="navbar-logo">
        <img src="./Image/logo.jpg" alt="Logo" />
      </a>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <a href="/#"><b>Home</b></a>
        </li>

        <li className="navbar-menu-item">
          <a href="/SignIn"><b>Sign In</b></a>
        </li>
        <li className="navbar-menu-item">
          <a href="/Login"><b>Login</b></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
