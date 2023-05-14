import React from "react";

function Ticket() {
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));

  if (!bookingDetails) {
    return <div>No booking details found.</div>;
  }

  const { selectedSeats, totalPrice, movieTitle, date, time } = bookingDetails;

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Movie: {movieTitle}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Seats: {selectedSeats.join(", ")}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
}

export default Ticket;
