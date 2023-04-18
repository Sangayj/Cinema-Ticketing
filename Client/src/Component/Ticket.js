import React, { useState } from 'react';
import './Ticket.css';

export default function Ticket() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  
    const handleSeatClick = (event) => {
      const seat = event.target;
      if (seat.classList.contains('occupied')) {
        return;
      }
      const isSelected = seat.classList.toggle('selected');
      const seatPrice = isSelected ? 300 : -300;
      setSelectedSeats((prevSelectedSeats) =>
        isSelected ? [...prevSelectedSeats, seat] : prevSelectedSeats.filter((s) => s !== seat)
      );
      setTotalPrice((prevTotalPrice) => prevTotalPrice + seatPrice);
    };
  
    return (
      <div className='top-container'>
        <h3 className='theater-name'>Lugar Theater</h3>
        <ul className='showcase'>
          <li>
            <div className='seat'></div>
            <small>Available</small>
          </li>
          <li>
            <div className='seat selected'></div>
            <small>Selected</small>
          </li>
          <li>
            <div className='seat occupied'></div>
            <small>occupied</small>
          </li>
        </ul>
        <div className='container' onClick={handleSeatClick}>
          <div className='screen'></div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
          </div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat occupied'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
          </div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat occupied'></div>
            <div className='seat'></div>
            <div className='seat'></div>
            <div className='seat occupied'></div>
            <div className='seat'></div>
            <div className='seat occupied'></div>
            <div className='seat'></div>
          </div>
          <div className='row'>
            <div className='seat'></div>
            <div className='seat occupied'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat occupied'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat occupied'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
</div>
<div className='row'>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
<div className='seat'></div>
</div>
</div>
<div className='bottom-container'>
<p className='text'>
You have selected <span>{selectedSeats.length}</span> seats for a price of Nu<span>{totalPrice}</span>
</p>
<button className='checkout-button'>Checkout</button>
</div>
</div>
);
}
  