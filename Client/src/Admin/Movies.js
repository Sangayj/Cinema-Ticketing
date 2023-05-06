import React, { useState } from "react";
import axios from "axios";

import "./Movies.css";

function Movies() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [theatre, setTheatre] = useState("");
  const [price, setPrice] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("director", director);
    formData.append("cast", cast);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("date", date.slice(0, 10));
    formData.append("time", time);
    formData.append("theatre", theatre);
    formData.append("price", price);

    axios
      .post("http://localhost:8000/upload", formData)
      .then((response) => {
        console.log(response.data);
        // Clear form fields
        setTitle("");
        setDirector("");
        setCast("");
        setDescription("");
        setImage(null);
        setDate("");
        setTime("");
        setTheatre("");
        setPrice("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="movie-form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cast:</label>
          <input
            type="text"
            value={cast}
            onChange={(e) => setCast(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Theatre:</label>
          <select
            value={theatre}
            onChange={(e) => setTheatre(e.target.value)}
            required
          >
            <option value="">Select theatre</option>
            <option value="Lugar Theatre">Lugar Theatre</option>
            <option value="City Cinema 1">City Cinema 1</option>
            <option value="City Cinema 2">City Cinema 2</option>
            <option value="Trowa Theatre">Trowa Theatre</option>
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

        <div className="movie-form">
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
}

export default Movies;
