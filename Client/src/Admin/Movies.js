import React, { useState } from "react";
import axios from "axios";

function Movies() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("director", director);
    formData.append("cast", cast);
    formData.append("description", description);
    formData.append("image", image);

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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
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
          <label>cast:</label>
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
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
}

export default Movies;
