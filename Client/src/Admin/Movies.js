import React, { useState, useEffect } from "react";
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
  const [theatreOptions, setTheatreOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/theatres")
      .then((response) => {
        setTheatreOptions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("director", director);
    formData.append("cast", cast);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("theatreId", theatre); // send theatre ID to server
    formData.append(
      "theatreName",
      theatreOptions.find((theatreOption) => theatreOption._id === theatre).name
    ); // send theatre name to server
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
        window.alert("Movie uploaded successfully");
      })
      .catch((error) => {
        console.error(error);
        window.alert("Error uploading movie");
      });
  };
  return (
    <div className="Movies">
      <h1>Add a New Movie</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            name="director"
            value={director}
            onChange={(event) => setDirector(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cast">Cast:</label>
          <input
            type="text"
            id="cast"
            name="cast"
            value={cast}
            onChange={(event) => setCast(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0])}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="theatre">Theatre:</label>
          <select
            id="theatre"
            name="theatre"
            value={theatre}
            onChange={(event) => setTheatre(event.target.value)}
            required
          >
            <option value="">Select a theatre</option>
            {theatreOptions.map((theatreOption) => (
              <option key={theatreOption._id} value={theatreOption._id}>
                {theatreOption.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Movies;
