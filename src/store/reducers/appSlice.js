import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export default appSlice.reducer;
export const { toggleDarkMode } = appSlice.actions;
