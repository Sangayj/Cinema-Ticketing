import React, { useState, useEffect } from "react";
import axios from "axios";
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

  return (
    <div>
      <h1>Theatres</h1>
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
              <td>{theatre.name}</td>
              <td>
                <div className="table-seats">
                  {theatre.assignedSeats.map((seat, index) => (
                    <div
                      key={index}
                      className={`seat ${
                        seat.status === "available"
                          ? "seat-available"
                          : "seat-occupied"
                      }`}
                    >
                      <span className="seat-number">{seat.seatNumber}</span>
                      <span className="seat-status">{seat.status}</span>
                    </div>
                  ))}
                </div>
              </td>
              <td>
                <a href={`/admin/theatres/${theatre._id}/edit`}>Edit</a> |{" "}
                <a href={`/admin/theatres/${theatre._id}/delete`}>Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTheatre;
