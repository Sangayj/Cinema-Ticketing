import React, { useState } from "react";
import axios from "axios";

function MovieForm() {
  const [movieName, setMovieName] = useState("");
  const [actor, setActor] = useState("");
  const [actress, setActress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("movieName", movieName);
      formData.append("actor", actor);
      formData.append("actress", actress);
      formData.append("startDate", startDate);
      formData.append("image", image);

      await axios.post("/api/movies", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Movie details uploaded successfully!");

      // Clear form fields after successful submission
      setMovieName("");
      setActor("");
      setActress("");
      setStartDate("");
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("An error occurred while uploading movie details.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie Name:
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Actor:
        <input
          type="text"
          value={actor}
          onChange={(e) => setActor(e.target.value)}
        />
      </label>
      <br />
      <label>
        Actress:
        <input
          type="text"
          value={actress}
          onChange={(e) => setActress(e.target.value)}
        />
      </label>
      <br />
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input type="file" onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MovieForm;
