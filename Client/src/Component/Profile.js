import React, { useContext } from 'react'
import {useState, useEffect} from "react"
import { AuthContext } from '../context/Authcontext';
import axios from 'axios';

export default function Profile() {
  const [users, setUsers] = useState([]);
  const {currentUser} = useContext(AuthContext)
  const [bookings, setBookings] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));

      axios
      .get("http://localhost:8000/bookings")
      .then((response) => {
        console.log(response.data)
        setBookings(response.data);
        console.log(bookings)
      })
      .catch((error) => {
        console.error(error);
      });

      axios
      .get("http://localhost:8000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

const currentBooking = bookings.find((i) => i.userId === currentUser.userId )
console.log(currentBooking)

const movie = movies.find((i) => i._id === currentBooking.movieId)
console.log(movie)

  return (
    <>

{users.filter((i) => i._id === currentUser.userId).map((user) => {

return(

  <>
    <div>Welcome Back {user.name}</div>
  <table>
    <tr>
      <th>
        Username
      </th>
      <th>
        name
      </th>
      <th>
        Movie
      </th>
      <th>
        Tickets
      </th>
      <th>
        Status
      </th>
    </tr>
    <tr>
      <th>
        {user.username}
      </th>
      <th>
        {user.name}
      </th>
      <th>
        {movie.title}
      </th>
      <th>
        {currentBooking.seatNumber}
      </th>
      <th>
        {currentBooking.status}
      </th>
    </tr>
  </table>
  </>

  

)

})}

    </>
   
    
  )
}
