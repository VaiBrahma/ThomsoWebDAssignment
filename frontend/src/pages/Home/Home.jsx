import React, { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch} from "react-redux"
import Card from "../../components/Card/Card.jsx";
import "./Home.css";
import { addMovie } from "../../store/movieSlice.js";

function Home() {
  const [movies, setMovies] = useState([]);
  const random = Math.floor(Math.random() * 500) + 1;
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchRandomMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie`,
          {
            params: {
              api_key: import.meta.env.VITE_API_KEY,
              page: random,
            },
          }
        );

        setMovies((e) => response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching random movies:", error);
      }
    }

    fetchRandomMovies();
  }, []);

  return (
    <>
      <div className="grid-container mt-20 gap-2">
        {movies.map((items) => (
          <Card movies={items} key={items.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
