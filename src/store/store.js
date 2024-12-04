import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appSlice";
import moviesReducer from "./reducers/moviesSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    movies: moviesReducer,
  },
});

export default store;
