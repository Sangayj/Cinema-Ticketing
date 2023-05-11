import React, { useState, useEffect } from "react";
import axios from "axios";

function Book() {
  const [cinemaHalls, setCinemaHalls] = useState([]);
  const [selectedCinemaHall, setSelectedCinemaHall] = useState(null);

  useEffect(() => {
    // Fetch all cinema halls from the backend
    axios
      .get("http://localhost:8000/api/cinema-halls")
      .then((response) => {
        setCinemaHalls(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cinema halls:", error);
      });
  }, []);

  const assignSeatToCinemaHall = (seatNumber) => {
    // Make a POST request to the backend to assign the seat to the selected cinema hall
    axios
      .post("http://localhost:8000/api/cinema-halls/assign-seat", {
        seatNumber: seatNumber,
        cinemaHallId: selectedCinemaHall._id,
      })
      .then((response) => {
        console.log("Seat assigned to cinema hall:", response.data);
      })
      .catch((error) => {
        console.error("Error assigning seat to cinema hall:", error);
      });
  };

  return (
    <div>
      <h2>Cinema Halls</h2>
      <ul>
        {cinemaHalls.map((cinemaHall) => (
          <li key={cinemaHall._id}>
            {cinemaHall.name} ({cinemaHall.seats} seats)
            <button onClick={() => setSelectedCinemaHall(cinemaHall)}>
              Select
            </button>
          </li>
        ))}
      </ul>

      {selectedCinemaHall && (
        <div>
          <h2>Seats for {selectedCinemaHall.name}</h2>
          <ul>
            {[...Array(selectedCinemaHall.seats)].map((_, index) => {
              const seatNumber = index + 1;
              const assignedSeat = selectedCinemaHall.assignedSeats.find(
                (seat) => seat.seatNumber === seatNumber
              );
              return (
                <li key={seatNumber}>
                  Seat {seatNumber}
                  {!assignedSeat && (
                    <button onClick={() => assignSeatToCinemaHall(seatNumber)}>
                      Assign
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Book;
