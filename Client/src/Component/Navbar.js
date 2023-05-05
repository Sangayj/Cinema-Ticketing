import { useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  return (
    <div className="navbar-container">
      <a href="/#" className="navbar-logo">
        <img src="./Image/logo.png" alt="Logo" className="navbar-logo-img" />
      </a>
      <nav ref={navRef} className="navbar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies"
        />
        <a className="nav-item" href="/Login">
          Login
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
