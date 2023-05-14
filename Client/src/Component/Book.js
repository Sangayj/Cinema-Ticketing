import React, { useState, useEffect } from "react";
import axios from "axios";
import Seat from "./Seat";

function Book() {
  const [theatre, setTheatre] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);

  const fetchTheatre = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/theatre");
      setTheatre(response.data);
    } catch (error) {
      console.error("Error fetching theatre:", error);
    }
  };

  const handleBookingSuccess = (data) => {
    setBookingInfo(data); // Store the booking information in state
  };

  useEffect(() => {
    fetchTheatre();
  }, []);

  return (
    <div>
      <h1>Booking Page</h1>
      {theatre ? (
        <div>
          <p>You have selected {theatre} theatre.</p>
          {bookingInfo ? (
            <p>
              Booking successful! Name: {bookingInfo.name}, Seats:{" "}
              {bookingInfo.seats}
            </p>
          ) : (
            <Seat
              theatre={theatre}
              onSuccess={handleBookingSuccess}
            />
          )}
        </div>
      ) : (
        <p>No theatre selected</p>
      )}
    </div>
  );
}

export default Book;
