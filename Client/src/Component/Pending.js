import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "./Pending.css";

function Pending() {
  const [bookingStatus, setBookingStatus] = useState("pending");
  const [bookingData, setBookingData] = useState(null);
  const locate = useLocation();
  const bookingId = locate?.state?.bookingId; // Check for existence before accessing state

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/bookings/${bookingId}`
        );
        setBookingData(response.data);
        setBookingStatus(response.data.status);
      } catch (error) {
        console.error(error);
      }
    };

    if (bookingId) {
      fetchBookingData();
    }
  }, [bookingId]);

  return (
    <div className="pending-container">
      {bookingStatus === "pending" && (
        <div>
          <h2>Pending Approval</h2>
          <p>Please wait for the admin to approve your bookings.</p>
        </div>
      )}

      {bookingStatus === "approved" && bookingData && (
        <div>
          <h2>Booking Approved</h2>
          <p>Your booking has been approved by the admin.</p>
          <p>Booking ID: {bookingData._id}</p>
          <p>Selected Seats: {bookingData.seatNumber}</p>
          <p>Total Price: {bookingData.totalPrice}</p>
          <Link to="/ticket" className="view-ticket-button">
            View Ticket
          </Link>
        </div>
      )}

      {bookingStatus === "rejected" && (
        <div>
          <h2>Booking Rejected</h2>
          <p>Your booking has been rejected by the admin.</p>
          <p>Please contact customer support for further assistance.</p>
        </div>
      )}

      {bookingStatus === "canceled" && (
        <div>
          <h2>Request Denied</h2>
          <p>Your booking request has been denied by the admin.</p>
          <p>Please contact customer support for further assistance.</p>
        </div>
      )}
    </div>
  );
}

export default Pending;
