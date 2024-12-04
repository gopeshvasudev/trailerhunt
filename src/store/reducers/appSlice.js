import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: true,
  isSideBarActive: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleSideBar(state) {
      state.isSideBarActive = !state.isSideBarActive;
    },
  },
});

export default appSlice.reducer;
export const { toggleDarkMode, toggleSideBar } = appSlice.actions;
