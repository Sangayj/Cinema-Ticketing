import React, { useState } from 'react';
import './AddMovies.css';

function AddMovie() {
  const [formData, setFormData] = useState({
    title: '',
    actor: '',
    description: '',
    image: null, // set initial image state to null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can send this data to your API or save it to your database
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // check if the input is for the image file
    if (name === 'image') {
      setFormData({ ...formData, [name]: e.target.files[0] }); // set the image state to the selected file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="image" className="form-label">Image:</label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            id="image"
            name="image"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="title" className="form-label">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="actor" className="form-label">Actor:</label>
          <input
            type="text"
            id="actor"
            name="actor"
            value={formData.actor}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-input">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Movie</button>
</form>
</div>
);
}
export default AddMovie;
