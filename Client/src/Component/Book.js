import React, { useState, useEffect } from "react";
import "./Book.css";

const Seat = ({ seatNumber, price, status, isSelected, onSelect }) => {
  const rowNumber = Math.floor((seatNumber - 1) / 20) + 1;
  const columnNumber = ((seatNumber - 1) % 20) + 1;
  const columnName = String.fromCharCode(64 + parseInt(columnNumber));
  const seat = `${columnName}${rowNumber}`;

  let className = "seat";
  if (isSelected) {
    className += " selected";
  } else if (status === "booked") {
    className += " booked";
  }

  return (
    <div className={className} onClick={() => onSelect(seatNumber)}>
      <span className="seat-number">{seat}</span>
      <span className="price">{price}</span>
    </div>
  );
};

const Book = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const numRows = 15;
    const numCols = 20;
    const initialSeats = [];
    for (let i = 1; i <= 300; i++) {
      const price = 10;
      const status = "available";
      initialSeats.push({
        id: i,
        number: i,
        price: price,
        status: status,
      });
    }
    setSeats(initialSeats);
  }, []);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((seat) => seat !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
  };

  const handleBookSeats = () => {
    fetch("http://localhost:8000/api/seats/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seats: selectedSeats }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectedSeats([]);
        setSeats(data);
        alert("Seats booked successfully!");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="book-container">
      <div className="screen">SCREEN</div>
      <div className="seats-container">
        {Array.isArray(seats) &&
          seats.map((seat) => (
            <Seat
              key={seat.id}
              seatNumber={seat.number}
              price={seat.price}
              status={seat.status}
              isSelected={selectedSeats.includes(seat.number)}
              onSelect={handleSeatClick}
            />
          ))}
      </div>
      <div className="booking-details">
        <h2>Booking Summary</h2>
        <div className="selected-seats">
          {selectedSeats.length === 0 ? (
            <p>No seats selected</p>
          ) : (
            <>
              <p>You have selected {selectedSeats.length} seat(s):</p>
              <ul>
                {selectedSeats.map((seatNumber) => (
                  <li key={seatNumber}>Seat {seatNumber}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        {selectedSeats.length === 0 ? (
          <p>Please select at least one seat to book</p>
        ) : (
          <p>
            <button onClick={handleBookSeats}>
              Book {selectedSeats.length} seat(s)
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Book;
