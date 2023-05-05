import React, { useState } from "react";
import axios from "axios";

const Movies = () => {
  const [movie, setMovie] = useState({
    poster: null,
    movieName: "",
    actors: "",
    producer: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setMovie((prevState) => ({
      ...prevState,
      poster: event.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("poster", movie.poster);
    formData.append("movieName", movie.movieName);
    formData.append("actors", movie.actors);
    formData.append("producer", movie.producer);
    formData.append("description", movie.description);
    formData.append("startDate", movie.startDate);
    formData.append("endDate", movie.endDate);

    try {
      await axios.post("http://localhost:8000/api/Movies", formData);
      alert("Movie added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="poster">Poster:</label>
        <input type="file" id="poster" name="poster" onChange={handleFileChange} />
      </div>
      <div>
        <label htmlFor="movieName">Movie Name:</label>
        <input type="text" id="movieName" name="movieName" value={movie.movieName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="actors">Actors:</label>
        <input type="text" id="actors" name="actors" value={movie.actors} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="producer">Producer:</label>
        <input type="text" id="producer" name="producer" value={movie.producer} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={movie.description} onChange={handleChange}></textarea>
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" name="startDate" value={movie.startDate} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" name="endDate" value={movie.endDate} onChange={handleChange} />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default Movies;
