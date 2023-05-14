import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminTheatres.css";

function AdminTheatre() {
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/theatres")
      .then((response) => {
        setTheatres(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteTheatre = (theatreId) => {
    if (window.confirm("Are you sure you want to delete this theatre?")) {
      axios
        .delete(`http://localhost:8000/api/theatres/${theatreId}`)
        .then(() => {
          setTheatres((prevTheatres) =>
            prevTheatres.filter((theatre) => theatre._id !== theatreId)
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleResetTheatre = (theatreId) => {
    if (window.confirm("Are you sure you want to reset this theatre?")) {
      axios
        .put(`http://localhost:8000/api/theatres/${theatreId}/reset`)
        .then((response) => {
          const updatedTheatre = response.data;
          setTheatres((prevTheatres) =>
            prevTheatres.map((theatre) =>
              theatre._id === updatedTheatre._id ? updatedTheatre : theatre
            )
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const getAvailableSeats = (seats) => {
    return seats.filter((seat) => seat.status === "available");
  };

  const getBookedSeats = (seats) => {
    return seats.filter((seat) => seat.status === "booked");
  };

  const getSeatNumbers = (seats) => {
    return seats.map((seat) => seat.seatNumber).join(", ");
  };

  return (
    <div>
      <h1>Theatres</h1>
      <Link to="/Seat">
        <button className="add-button">Add theatre</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Seats</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {theatres.map((theatre, index) => (
            <tr key={theatre._id}>
              <td>{index + 1}</td>
              <td>{theatre.name} </td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="table-seats-heading">Available</div>
                        <div className="table-seats-available">
                          {getSeatNumbers(
                            getAvailableSeats(theatre.assignedSeats)
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="table-seats-heading">Booked</div>
                        <div className="table-seats-booked">
                          {getSeatNumbers(
                            getBookedSeats(theatre.assignedSeats)
                          )}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteTheatre(theatre._id)}
                >
                  Delete theatre
                </button>
                <button
                  className="reset-button"
                  onClick={() => handleResetTheatre(theatre._id)}
                >
                  Reset theatre
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTheatre;
