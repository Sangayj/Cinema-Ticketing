import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/Login");
  };

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
        />
        {isLoggedIn ? (
          <button className="nav-item" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="nav-item" onClick={handleLogin}>
            Login
          </button>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
