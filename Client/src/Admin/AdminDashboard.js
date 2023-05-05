// AdminDashboard.js

import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./AdminDashboard.css";

const AdminDashboard = () => {
  const history = useNavigate();

  const handleLogout = () => {
    // Perform logout logic, such as clearing session or token

    // Redirect to login page
    history("/Login");
  };
  return (
    <div className="admin-dashboard">
      <div className="left-panel">
        <Link to="/Movies" className="nav-link">
          Upload Movies
        </Link>
        <Link to="/MovieDetails" className="nav-link">
          Movie Details
        </Link>
        <Link to="/bookings" className="nav-link">
          Bookings
        </Link>
        <Link to="/Customer" className="nav-link">
          Users
        </Link>
        <button className="nav-link logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="center-panel">
        <h2 className="welcome-message">Welcome to Admin Dashboard!</h2>
      </div>
    </div>
  );
};

export default AdminDashboard;
