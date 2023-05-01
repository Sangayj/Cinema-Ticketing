// AdminDashboard.js

import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="left-panel">
        <Link to="/movies" className="nav-link">
          Movies
        </Link>
        <Link to="/theatres" className="nav-link">
          Theatres
        </Link>
        <Link to="/bookings" className="nav-link">
          Bookings
        </Link>
        <Link to="/users" className="nav-link">
          Users
        </Link>
        <Link to="/changepassword" className="nav-link">
          Change Password
        </Link>
        <button className="nav-link logout-btn">Logout</button>
      </div>
      <div className="center-panel">
        <h2 className="welcome-message">Welcome to Admin Dashboard</h2>
      </div>
    </div>
  );
};

export default AdminDashboard;
