import React, { useState } from "react";
import axios from "axios";
import "./Seat.css";

function Seat() {
  const [cinemaHallName, setCinemaHallName] = useState("");
  const [cinemaHallSeats, setCinemaHallSeats] = useState("");

  const createCinemaHall = () => {
    axios
      .post("http://localhost:8000/api/cinema-halls", {
        name: cinemaHallName,
        seats: cinemaHallSeats,
      })
      .then((response) => {
        console.log("Cinema hall created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating cinema hall:", error);
      });
  };

  return (
    <div>
      <div className="form">
        <h2>Create Cinema Hall</h2>
        <label>
          Name:
          <input
            type="text"
            value={cinemaHallName}
            onChange={(event) => setCinemaHallName(event.target.value)}
          />
        </label>
        <label>
          Seats:
          <input
            type="number"
            value={cinemaHallSeats}
            onChange={(event) => setCinemaHallSeats(event.target.value)}
          />
        </label>
        <button onClick={createCinemaHall}>Create</button>
      </div>
    </div>
  );
}

export default Seat;
