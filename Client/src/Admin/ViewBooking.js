import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewBooking.css";

function ViewBooking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/bookings")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleApprove = (bookingId) => {
    // Handle the approval of the booking
    // You can perform any necessary actions here
    console.log("Booking approved:", bookingId);
  };

  const handleCancel = (bookingId) => {
    // Handle the cancellation of the booking
    // You can perform any necessary actions here
    console.log("Booking canceled:", bookingId);
  };

  return (
    <div className="view-booking-container">
      <h1>Booking Details</h1>
      <table className="booking-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Seat Number</th>
            <th>Total Price</th>
            <th>Journal Code</th>
            <th>Theatre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.username}</td>
              <td>{booking.phone}</td>
              <td>{booking.seatNumber}</td>
              <td>{booking.totalPrice}</td>
              <td>{booking.journalCode}</td>
              <td>{booking.theatre}</td>
              <td>
                <button onClick={() => handleApprove(booking._id)}>
                  Approve
                </button>
                <button onClick={() => handleCancel(booking._id)}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBooking;
