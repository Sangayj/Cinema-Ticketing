import React, { useState } from "react";
import axios from "axios";

const MovieForm = () => {
  const [movieData, setMovieData] = useState({
    movieName: "",
    actors: "",
    producers: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    setMovieData({ ...movieData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/MovieForm", movieData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie Name:
        <input
          type="text"
          name="movieName"
          value={movieData.movieName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Actors:
        <input
          type="text"
          name="actors"
          value={movieData.actors}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Producers:
        <input
          type="text"
          name="producers"
          value={movieData.producers}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={movieData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={movieData.startDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={movieData.endDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;
