import React, { useState } from "react";
import axios from "axios";
import "./Payment.css";

function Payment({ userId, movieId, theatreId }) {
  const [journalCode, setJournalCode] = useState("");
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));

  if (!bookingDetails) {
    return <div>No booking details found.</div>;
  }

  const { selectedSeats, totalPrice } = bookingDetails;

  const handleJournalCodeChange = (event) => {
    setJournalCode(event.target.value);
  };

  const handleSubmit = () => {
    const bookingData = {
      userId,
      theatreId,
      journalCode,
      seatNumber: selectedSeats.join(", "),
      totalPrice,
      movieId,
    };
    axios
      .post("http://localhost:8000/bookings", bookingData)
      .then((response) => {
        console.log("Booking data sent to admin:", response.data);
        // Perform any necessary actions after successful submission
      })
      .catch((error) => {
        console.error("Error submitting booking data:", error);
        // Handle error cases
      });
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <p>Selected Seat(s): {selectedSeats.join(", ")}</p>
      <p>Total Price: {totalPrice}</p>
      <p className="payment-notice">
        Notice: Please kindly transfer the required amount to the below account
        number and send your journal code to proceed with your bookings.
      </p>
      <div className="account-details">
        <p className="account-number">Account Number: *************</p>
        <p className="account-holder">Account Holder: ***********</p>
      </div>
      <div className="journal-input">
        <label htmlFor="journalCode">Journal Code:</label>
        <input
          type="text"
          id="journalCode"
          value={journalCode}
          onChange={handleJournalCodeChange}
        />
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Payment;
