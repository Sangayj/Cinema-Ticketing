import React from "react";
import "./View.css";

function View() {
  return (
    <div>
      <div className="card">
        <div className="movie-banner">
          <img
            src="./Images/download.jpeg"
            alt="banner"
            className="movie-banner-image"
          />
          <div className="movie-banner-body">
            <p className="movie-banner-title">Druk</p>
            <p className="movie-banner-director"> Karma Jerry</p>
            <p className="movie-banner-actor">Tshering Gyeltshen</p>
            <p className="movie-banner-actress">Tandin Bhida</p>
            <p className="movie-banner-description">
              It is a story that will educate every student, Individuals and the
              nation about their existence.
            </p>
          </div>
        </div>
        <div className="ticket">
          <div className="label">Date:</div>
          <div className="value">2nd Sept, 2023</div>

          <div className="label">Time:</div>
          <div className="value">5pm-8pm</div>

          <div className="label">Theatre:</div>
          <div className="value">Lugar Theatre</div>

          <div className="label">Ticket Price:</div>
          <div className="value">Nu. 400</div>
        </div>
      </div>
    </div>
  );
}

export default View;
