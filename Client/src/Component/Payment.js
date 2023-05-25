import React, { useState } from "react";
import axios from "axios";
import "./Payment.css";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const [journalCode, setJournalCode] = useState("");
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
  const navigate = useNavigate()
  const locate = useLocation()
  const ids = locate.state

  console.log(ids)

  if (!bookingDetails) {
    return <div>No booking details found.</div>;
  }

  const { selectedSeats, totalPrice } = bookingDetails;

  const handleJournalCodeChange = (event) => {
    setJournalCode(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = ids.userId
    const theatreId = ids.theatreId
    const movieId = ids.movieId

    const bookingData = {
      userId,
      theatreId,
      journalCode,
      seatNumber: selectedSeats.join(", "),
      totalPrice,
      movieId,
    };

    console.log(bookingData)
    await axios.post("http://localhost:8000/api/booking/", bookingData).then(() => {
      alert("Payment Sucessful");
      navigate('/')

    }).catch((err) => alert(err))
   

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
      <form onSubmit={handleSubmit}>

      
        <label htmlFor="journalCode">Journal Code:</label>
        <input
          type="text"
          id="journalCode"
          value={journalCode}
          onChange={handleJournalCodeChange}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
