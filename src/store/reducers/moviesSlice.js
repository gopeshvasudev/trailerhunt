import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  nowPlayingMovies: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies(state, action) {
      state.topRatedMovies = action.payload;
    },
    setUpcomingMovies(state, action) {
      state.upcomingMovies = action.payload;
    },
    setNowPlayingMovies(state, action) {
      state.nowPlayingMovies = action.payload;
    },
    setTrendingMovies(state, action) {
      state.trendingMovies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const {
  setPopularMovies,
  setNowPlayingMovies,
  setTopRatedMovies,
  setTrendingMovies,
  setUpcomingMovies,
} = moviesSlice.actions;
