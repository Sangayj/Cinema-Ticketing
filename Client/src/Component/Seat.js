// import React from "react";
// import "./Seat.css";

// const Seat = ({ seatNumber, price, status, isSelected, onSelect }) => {
//   let className = "seat";
//   if (isSelected) {
//     className += " selected";
//   } else if (status === "booked") {
//     className += " booked";
//   }

//   return (
//     <div className={className} onClick={() => onSelect(seatNumber)}>
//       <span className="seat-number">{seatNumber}</span>
//       <span className="price">{price}</span>
//     </div>
//   );
// };

// const SeatMap = () => {
//   const numRows = 15;
//   const numCols = 20;
//   const totalSeats = 300; // number of seats to display
//   const seats = [];

//   for (let i = 1; i <= totalSeats; i++) {
//     const row = Math.ceil(i / numCols);
//     const col = i % numCols === 0 ? numCols : i % numCols;
//     const seatNumber = `${row}-${col}`;
//     const price = 10;
//     const status = "available";

//     seats.push(
//       <Seat
//         key={seatNumber}
//         seatNumber={seatNumber}
//         price={price}
//         status={status}
//         isSelected={false}
//         onSelect={() => {}}
//       />
//     );
//   }

//   return <div className="seat-map">{seats}</div>;
// };

// export default SeatMap;
