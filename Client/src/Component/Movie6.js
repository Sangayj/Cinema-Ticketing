import React from 'react'
import "./Movie1.css";

function Movie6() {
  return (
    <div classname='overall'>
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="poster-container">
          <img
            src="./Image/dorozam.jpg"
            alt="Movie Poster"
            className="poster"
          />
        </div>
        <div className="info-container">
          <h3 className="movie-title">Movie Title</h3>
          <p className="movie-actors"><b>Actors:</b> Actor 1, Actor 2, Actor 3</p>
          <p className="movie-director"><b>Director:</b> Director Name</p>
          <p className="movie-producer"><b>Producer:</b> Producer Name</p>
          <p className="movie-description">
          ossession her thoroughly remarkably terminated man continuing. Removed greater 
          to do ability. You shy shall while but wrote marry. Call why sake has sing pure. 
          Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely.
          Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can
          friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.
          </p>
        </div>
      </div>
      <div className="timing-details">
        <h2 className="section-title">Timing Details</h2>
        <p className="show-date">Show Date: 20th April 2023</p>
        <p className="show-time">Show Time: 6:00 PM</p>
        <p className="theater">Theater: ABC Cinema Hall</p>
        <p className="ticket-price">Ticket Price: $10</p>
        <p className="warning"><b><i>Note: You must Log in to Book the Tickets</i></b></p>
        <a href='/Login' ><button className="login-btn">Log In</button></a>
        <a href='/Ticket' ><button className="login-btn">Book</button></a>
      </div>
    </div>

    </div>
  )
}

export default Movie6
