import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    playingMovies: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.playingMovies = action.payload;
    },
  },
});
export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
