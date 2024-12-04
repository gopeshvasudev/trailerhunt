import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPopularMovies(state, action) {
      state.popularMovies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const { setPopularMovies } = moviesSlice.actions;
