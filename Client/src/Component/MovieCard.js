import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={`data:${movie.poster.contentType};base64,${Buffer.from(
          movie.poster.data
        ).toString("base64")}`}
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p>Director: {movie.director}</p>
        <p>Actor: {movie.actor}</p>
        <p>Actress: {movie.actress}</p>
      </div>
    </div>
  );
};

export default MovieCard;
