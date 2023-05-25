import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./ViewBooking.css";
import { AuthContext } from "../context/Authcontext";

function ViewBooking() {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [theatres, setTheatres] = useState([]);
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  useEffect(() => {
    axios
      .get("http://localhost:8000/bookings")
      .then((response) => {
        console.log(response.data);
        setBookings(response.data);
        console.log(bookings);
      })
      .catch((error) => {
        console.error(error);
      });
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8000/api/theatres")
      .then((response) => {
        setTheatres(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [bookings]);

  const handleApprove = (bookingId) => {
    axios
      .put(`http://localhost:8000/api/bookings/${bookingId}/approve`)
      .then((response) => {
        // Handle the success case
        console.log("Booking approved:", bookingId);
        alert("Booking Approved");
      })
      .catch((error) => {
        // Handle the error case
        console.error("An error occurred while approving the booking:", error);
      });
  };

  const handleCancel = (bookingId) => {
    axios
      .put(`http://localhost:8000/api/bookings/${bookingId}/cancel`)
      .then((response) => {
        // Handle the success case
        console.log("Booking canceled:", bookingId);
        alert("Booking Canceled");
        window.location.reload();
      })
      .catch((error) => {
        // Handle the error case
        console.error("An error occurred while canceling the booking:", error);
      });
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
          {bookings.reverse().map((booking) => {
            // Find the user object with the matching userId
            const user = users.find((user) => user._id === booking.userId);
            console.log(theatres);
            const theatre = theatres.find(
              (theatre) => theatre._id === booking.theatreId
            );
            console.log(theatre);

            return (
              <tr key={booking._id}>
                <td>{user ? user.name : ""}</td>
                <td>{user ? user.username : ""}</td>
                <td>{user ? user.phone : "No phone number"}</td>
                <td>{booking.seatNumber}</td>
                <td>{booking.totalPrice}</td>
                <td>{booking.journalCode}</td>
                <td>{theatre ? theatre.name : "No theatre"}</td>
                <td>
                  <button onClick={() => handleApprove(booking._id)}>
                    Approve
                  </button>
                  <button onClick={() => handleCancel(booking._id)}>
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBooking;
