import React from 'react';
import './Movie1.css';

function MovieDetails() {
  return (
    <div classname='overall'>
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="poster-container">
          <img
            src="https://via.placeholder.com/350x500"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            nulla vel odio hendrerit pharetra. Suspendisse at purus nec nibh
            blandit sodales. Praesent aliquam enim nunc, eget posuere tellus
            consequat in. Nunc eget justo ultricies, malesuada est vitae, semper
            sapien. Nullam eu lorem eget augue luctus blandit at eu ipsum. Donec
            fringilla risus nec dolor laoreet, non eleifend risus pellentesque.
            Praesent semper ornare ultrices. Morbi quis risus sed risus varius
            malesuada sed vel quam. Nulla facilisi. Suspendisse hendrerit nibh
            quis urna aliquam tincidunt. Donec consectetur lobortis felis, a
            rhoncus urna auctor a. Aliquam vitae sapien vel enim vestibulum
            venenatis.
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
        <button className="login-btn">Log In</button>
      </div>
    </div>

    </div>
  );
}

export default MovieDetails;
