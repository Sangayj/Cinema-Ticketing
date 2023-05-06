import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieDetails.css";

function MovieDetails() {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEdit = (movie) => {
    setEditingMovie(movie);
    setDialogOpen(true);
  };

  const handleSave = (updatedMovie) => {
    handleUpdate(updatedMovie._id, updatedMovie);
    setDialogOpen(false);
  };

  const handleCancel = () => {
    setEditingMovie(null);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleUpdate = (id, movie) => {
    axios
      .put(`http://localhost:8000/api/movies/${id}`, movie)
      .then(() => {
        setMovies(
          movies.map((m) => {
            if (m._id === id) {
              return movie;
            } else {
              return m;
            }
          })
        );
        console.log(`Movie with ID ${id} has been updated.`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/movies/${id}`)
      .then(() => {
        setMovies(movies.filter((movie) => movie._id !== id));
        console.log(`Movie with ID ${id} has been deleted.`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <table className="movies-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Title</th>
            <th>Director</th>
            <th>Cast</th>
            <th>Date</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie._id}>
              <td>{index + 1}</td>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.cast}</td>
              <td>{movie.date}</td>
              <td>{movie.description}</td>
              <td>{movie.price}</td>
              <td>
                <img
                  className="card-image"
                  src={`http://localhost:8000/uploads/${movie.filename}`}
                  alt={movie.originalname}
                />{" "}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(movie._id)}
                  className="delete-button"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(movie)}
                  className="edit-button"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingMovie && (
        <EditDialog
          movie={editingMovie}
          onSave={handleSave}
          onCancel={handleCancel}
          open={dialogOpen}
        />
      )}
    </div>
  );
}

function EditDialog(props) {
  const { movie, onSave, onCancel } = props;

  const [title, setTitle] = useState(movie.title);
  const [director, setDirector] = useState(movie.director);
  const [cast, setCast] = useState(movie.cast);
  const [date, setDate] = useState(movie.date);
  const [description, setDescription] = useState(movie.description);
  const [price, setPrice] = useState(movie.price);

  const handleSave = () => {
    const updatedMovie = {
      ...movie,
      title: title,
      director: director,
      cast: cast,
      date: date,
      description: description,
      price: price,
    };
    onSave(updatedMovie);
  };
  return (
    <div className="edit-dialog">
      <h2>Edit Movie</h2>
      <div className="form-row">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="director">Director</label>
        <input
          type="text"
          id="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="cast">Cast</label>
        <input
          type="text"
          id="cast"
          value={cast}
          onChange={(e) => setCast(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="button-row">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default MovieDetails;
