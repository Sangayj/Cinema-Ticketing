import React, { useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  return (
    <header className="navbar-container">
      <div className="navbar-left">
        <a href="/#" className="navbar-logo">
          <img src="./Image/logo.png" alt="Logo" />
        </a>
      </div>
      <nav ref={navRef} className="navbar-right">
        <div className="search-engine">
          <input className="search-input" type="text" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <a className="nav-item" href="/Login">
          Login
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
