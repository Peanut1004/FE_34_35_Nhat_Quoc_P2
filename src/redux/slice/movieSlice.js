import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";

export const getMovie = createAsyncThunk("getMovie", async () => {
  const currentMovie = await movieApi.getMovie();
  return currentMovie;
});

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getMovie.pending]: (state) => {
      state.loading = true;
    },

    [getMovie.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMovie.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: movieReducer, actions } = movieSlice;
export const {  } = actions;
export default movieReducer;
