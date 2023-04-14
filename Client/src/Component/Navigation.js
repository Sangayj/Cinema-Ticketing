import React from 'react'
import "./Navigation.css";

function Navigation() {
    
  return (
    <nav>
        <h1>
    <img src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg" alt="Cinema Ticket Booking Logo" class="logo" />
    Cinema Ticket Booking
  </h1>
    <ul>
      <li><a href="/Homepage" className="active">Home</a></li>
      <li><a href="/Contact" className="nav-link">Contact</a></li>
      <li><a href="/SignIn" className="nav-link">Sign In</a></li>
      <li><a href="/Register" className="nav-link">Register</a></li>
      <li className="search">
        <form>
          <input type="text" placeholder="Search..." className="search-bar" />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </li>
    </ul>
  </nav>
  )
}

export default Navigation