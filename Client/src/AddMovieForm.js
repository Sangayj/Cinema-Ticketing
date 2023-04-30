import { useState } from 'react';

function AddMovieForm() {
  const [movieName, setMovieName] = useState('');
  const [actors, setActors] = useState('');
  const [producer, setProducer] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch('http://localhost:8000/api/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movieName, actors, producer, description, startDate, endDate }),
      });
      alert('Movie added to database');
    } catch (err) {
      console.log(err);
      alert('Error adding movie to database');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie Name:
        <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
      </label>
      <label>
        Actors:
        <input type="text" value={actors} onChange={(e) => setActors(e.target.value)} />
      </label>
      <label>
        Producer:
        <input type="text" value={producer} onChange={(e) => setProducer(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      
      <button type="submit">Submit</button>
    </form>
  );
}
export default AddMovieForm;
