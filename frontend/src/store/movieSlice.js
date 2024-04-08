import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [
    {
        "adult": false,
        "backdrop_path": "/sR0SpCrXamlIkYMdfz83sFn5JS6.jpg",
        "genre_ids": [
          28,
          878,
          12,
          14
        ],
        "id": 823464,
        "original_language": "en",
        "original_title": "Godzilla x Kong: The New Empire",
        "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
        "popularity": 3537.982,
        "poster_path": "/1hUTqPnfTvuupk7XW7WCkWYW4M1.jpg",
        "release_date": "2024-03-27",
        "title": "Godzilla x Kong: The New Empire",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 462
    },
  ],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const movie = action.payload;
      console.log('action payload from movie is: ', movie);
      state.movie.push(movie);
    },
    removeMovie: (state, action) => {
      state.movie = state.movie.filter((movie) => movie._id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;

export default movieSlice.reducer;