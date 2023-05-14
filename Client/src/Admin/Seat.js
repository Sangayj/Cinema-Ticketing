import React, { useState } from "react";
import axios from "axios";
import "./Seat.css";

function Seat() {
  const [theatreHallName, setTheatreHallName] = useState("");
  const [theatreHallSeats, setTheatreHallSeats] = useState("");

  const createTheatreHall = () => {
    axios
      .post("http://localhost:8000/api/theatres", {
        name: theatreHallName,
        seats: theatreHallSeats,
      })
      .then((response) => {
        alert("Theatre hall created successfully!");
        console.log("Theatre hall created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating theatre hall:", error);
      });
  };

  return (
    <div>
      <div className="form">
        <h2>Create Theatre Hall</h2>
        <label>
          Name:
          <input
            type="text"
            value={theatreHallName}
            onChange={(event) => setTheatreHallName(event.target.value)}
          />
        </label>
        <label>
          Total no of Seats:
          <input
            type="number"
            value={theatreHallSeats}
            onChange={(event) => setTheatreHallSeats(event.target.value)}
          />
        </label>
        <button onClick={createTheatreHall}>Create</button>
      </div>
    </div>
  );
}

export default Seat;
