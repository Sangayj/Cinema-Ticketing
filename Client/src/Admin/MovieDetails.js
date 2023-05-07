import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieDetails.css";
import EditDialog from "./EditDialog";
import { Link } from "react-router-dom";

function MovieDetails() {
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);

  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };

  const handleSave = (updatedMovie) => {
    handleUpdate(updatedMovie._id, updatedMovie);
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
      <Link to="/Movies" className="add-users-button">
        Upload Movies
      </Link>
      <table className="movies-table">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Title</th>
            <th>Director</th>
            <th>Cast</th>
            <th>Date</th>
            <th>Time</th>

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
              <td>{movie.time}</td>

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
                  Update
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
        />
      )}
    </div>
  );
}

export default MovieDetails;
