import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "./Ticket.css";

function Ticket() {
  const ticketRef = useRef(null);
  const bookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));

  if (!bookingDetails) {
    return <div>No booking details found.</div>;
  }

  const { selectedSeats, totalPrice, movieTitle, date, time, theatreName } =
    bookingDetails;

  const seatNumbers = Array.isArray(selectedSeats)
    ? selectedSeats.join(", ")
    : "";

  const handleSaveToDevice = () => {
    html2canvas(ticketRef.current).then((canvas) => {
      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL();

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "ticket.png";

      // Trigger a click event on the link element to start the download
      link.click();

      // Remove the temporary link element
      link.remove();

      // Display a confirmation message
      alert("Ticket downloaded and saved to device!");
    });
  };

  return (
    <div>
      <div className="ticket-container" ref={ticketRef}>
        <h2 className="ticket-heading">BTickets</h2>
        <p className="ticket-details">
          Movie: <span>{movieTitle}</span>
        </p>
        <p className="ticket-details">
          Date: <span>{date}</span>
        </p>
        <p className="ticket-details">
          Time: <span>{time}</span>
        </p>
        <p className="ticket-details">
          Theatre: <span>{theatreName}</span>
        </p>
        <p className="ticket-details">
          Seats: <span>{seatNumbers}</span>
        </p>
        <p className="ticket-price">Total Price: {totalPrice}</p>
      </div>
      <button className="save-device-button" onClick={handleSaveToDevice}>
        Save to device
      </button>
    </div>
  );
}

export default Ticket;
