import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import "./Book.css";

function Book(props) {
  const { userId, movieId } = props;
  const { id } = useParams();
  const location = useLocation();
  const price = parseFloat(queryString.parse(location.search).price);
  const [theatre, setTheatre] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/theatres/${id}`)
      .then((response) => {
        setTheatre(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!theatre) {
    return <div>Loading...</div>;
  }

  const handleSeatClick = (seat) => {
    if (isSeatBooked(seat)) {
      alert("Seat already booked");
    } else if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const isSeatSelected = (seat) => {
    return selectedSeats.includes(seat);
  };

  const isSeatBooked = (seat) => {
    return theatre.assignedSeats.some(
      (assignedSeat) =>
        assignedSeat.seatNumber === seat && assignedSeat.status === "booked"
    );
  };

  const formatter = new Intl.NumberFormat("en-Nu", {
    style: "currency",
    currency: "BTN",
    minimumFractionDigits: 2,
  });

  const totalPrice = !isNaN(price) ? price * selectedSeats.length : 0;

  const formattedPrice = formatter.format(totalPrice);

  const seatNumbers = selectedSeats.join(", ");

  const handleBooking = () => {
    // Save the booking details in local storage so they can be accessed in the Payment component
    const query = queryString.parse(location.search);
    const movieTitle = query.title;
    const date = query.date;
    const time = query.time;
    const theatreId = query.theatre;

    const bookingDetails = {
      selectedSeats,
      totalPrice,
      movieId,
      movieTitle,
      date,
      time,
      theatreId,
      userId,
    };

    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

    // Reset the selected seats state
    setSelectedSeats([]);

    // Navigate to the payment page
    navigate("/Payment", {
      state: {
        userId, // Pass the userId prop
        movieId, // Pass the movieId prop
        theatreId,
      },
    });
  };

  const seatSummary = (
    <div className="seat-summary">
      <p>
        You have selected <strong>{selectedSeats.length}</strong> seats with
        seat number: <strong>{seatNumbers}</strong>.
      </p>
      <p>
        The total price for your booking is <strong>{formattedPrice}</strong>.
      </p>
      <button className="book-button" onClick={handleBooking}>
        Confirm
      </button>
    </div>
  );

  const seatLegend = (
    <div className="seat-legend">
      <span className="available"></span>
      <span>Available</span>
      <span className="selected"></span>
      <span>Selected</span>
      <span className="booked"></span>
      <span>Booked</span>
    </div>
  );

  const bookedSeatCSS = `
    .seat.booked {
      background-color: red;
    }
  `;

  return (
    <div>
      <div className="seat-grid">
        <div className="screen">SCREEN</div>
        {Array.from(Array(theatre.seats).keys()).map((seat) => {
          const seatNumber = seat + 1;
          const seatStatus = isSeatBooked(seatNumber)
            ? "booked"
            : isSeatSelected(seatNumber)
            ? "selected"
            : "available";
          return (
            <div
              key={seatNumber}
              className={`seat ${seatStatus}`}
              onClick={() => handleSeatClick(seatNumber)}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>
      {seatLegend}
      {seatSummary}
      <style>{bookedSeatCSS}</style>
    </div>
  );
}

export default Book;
