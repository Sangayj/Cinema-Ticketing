import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-bar-input"
        />
        <button className="search-bar-button">Search </button>
      </div>
      <div className="allmovieslist">
        <p>All Movies List</p>
      </div>
    </div>
  );
};

export default Home;
