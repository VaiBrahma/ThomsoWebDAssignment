import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import axios from 'axios';
import './App.css'
function MyComponent() {

  const [movies, setMovies] = useState([]);

  const random = Math.floor(Math.random()*500) + 1;

  useEffect(() => {
    async function fetchRandomMovies() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
          params: {
            api_key: import.meta.env.VITE_API_KEY,
            page: random,
          },
        });

        setMovies(e=>response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching random movies:', error);
      }
    }

    fetchRandomMovies();
  }, []);


  return (
    <>
    <div className='grid-container my-[5rem] mx-[2em]'>
        {movies.map(items=>(
          <Card movies={items} key={items.id}/>
        ))}
    </div>
    </>
  );
}

export default MyComponent;
