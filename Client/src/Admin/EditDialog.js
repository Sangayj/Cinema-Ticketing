import React, { useState } from "react";
import "./EditDialog.css";

function EditDialog(props) {
  const [updatedMovie, setUpdatedMovie] = useState(props.movie);
  const [isVisible, setIsVisible] = useState(true); // added state variable

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUpdatedMovie((prevMovie) => ({
      ...prevMovie,
      image: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSave(updatedMovie);
    setIsVisible(false); // hide modal after saving
  };

  const handleCancel = () => {
    setIsVisible(false); // hide modal when cancel button is clicked
    props.onCancel();
  };

  return (
    <>
      {isVisible && ( // render the dialog only when isVisible is true
        <div className="dialog">
          <form onSubmit={handleSubmit}>
            <h2>Edit Movie</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={updatedMovie.title}
              onChange={handleInputChange}
            />
            <label htmlFor="director">Director:</label>
            <input
              type="text"
              name="director"
              value={updatedMovie.director}
              onChange={handleInputChange}
            />
            <label htmlFor="cast">Cast:</label>
            <input
              type="text"
              name="cast"
              value={updatedMovie.cast}
              onChange={handleInputChange}
            />
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              value={updatedMovie.date}
              onChange={handleInputChange}
            />
            <label htmlFor="date">Time:</label>
            <input
              type="time"
              name="time"
              value={updatedMovie.time}
              onChange={handleInputChange}
            />

            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              value={updatedMovie.description}
              onChange={handleInputChange}
            />
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              value={updatedMovie.price}
              onChange={handleInputChange}
            />
            <label htmlFor="image">Image:</label>
            <input type="file" name="image" onChange={handleImageChange} />
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default EditDialog;
