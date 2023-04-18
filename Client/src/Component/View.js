import React from 'react'
import './View.css'
import poster from './jamtsho.jpg'

function MovieCard(props) {
  return (
    <div className='container-view'>
    <div className='card mt-s' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
      <img className='card-img-top' src={props.poster} alt='movie' />
      <div className='card-body col-3'>
        <p className='card-text'> <b>Movie: {props.movieName}</b></p>
        <p className='card-text'> <b>Actors: {props.actors}</b></p>
        <p className='card-text'> <b>Director: {props.director}</b></p>
        <p className='card-text'> <b>Producer: {props.producer}</b></p>
        <p className='card-text'> <b>Description: {props.description}</b></p>
        <hr/>
         <div className='Venue' /*style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}*/> 
        <h3><b>Show Date:  {props.showDate}</b></h3>
        <h3><b>Show Time:  {props.showTime}</b></h3>
        <h3><b>Theater:  {props.theater}</b></h3>
        <h3><b>Ticket Price: {props.ticketPrice}(per head)</b></h3>
        <a href="/Login" >
          <h2 className='booked'>Please login to book tickets</h2>
          <button className="btn btn-info">LogIn</button>
        </a>
        <a href="/Ticket" >
          <h2 className='book'>Please login to book tickets</h2>
          <button className="btn btn-info">Book</button>
        </a>
      </div>
      </div>
      
    </div>
    </div>
  )
}

function MovieList() {
  const movies = [
    {
      movieName: 'Doro Zam',
      actors: 'Tandin Sonam, Tshi Tshoki Wangmo, Karma Tshering',
      director: 'Karma Jerry',
      producer: 'Tshi Tshoki Wangmo',
      description: 'A rebellious young man living a troublesome life in the city, is sent to his village after getting into trouble with cops. There, he find love and new enemies.',
      showDate: '2nd september 2023',
      showTime: '6pm',
      theater: 'Lugar theater, Thimphu',
      ticketPrice: 'Nu.300'
    },
    {
      movieName: 'Nga Kinley Choegi Superman',
      actors: 'Actor 1, Actor 2, Actor 3',
      director: 'Director Name',
      producer: 'Producer Name',
      description: 'Movie Description dksbvbvsdfjkbvfjk;bv;d fvieawgfiuv ergvuiegirgvbyin',
      showDate: '3rd september',
      showTime: '7pm',
      theater: 'City Cinema',
      ticketPrice: 'Nu.350'
    }
  ];

  return (
    <div>
      {movies.map(movie => (
        <MovieCard
          key={movie.movieName}
          poster={poster}
          movieName={movie.movieName}
          actors={movie.actors}
          director={movie.director}
          producer={movie.producer}
          description={movie.description}
          showDate={movie.showDate}
          showTime={movie.showTime}
          theater={movie.theater}
          ticketPrice={movie.ticketPrice}
        />
      ))}
    </div>
  );
}

export default function View() {
  return (
    <div className='container-view'>
      <h1 className='caption'>Displaying Details</h1>
      <MovieList />
    </div>
  )
}
