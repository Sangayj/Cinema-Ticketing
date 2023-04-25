import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <a href="/#" className="navbar-logo">
        <img src="./Image/logo.png" alt="Logo" />
      </a>
      <nav ref={navRef} className="navbar">
        <a className="nav-item" href="/#">
          Home
        </a>
        <a className="nav-item" href="/SignIn">
          Sign In
        </a>
        <a className="nav-item" href="/SignIn">
          Login
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
