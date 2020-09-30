import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesApi from "../../api/moviesApi";

export const getMovies = createAsyncThunk("getMovies", async () => {
  const currentMovies = await moviesApi.getMovies();
  return currentMovies;
});

export const getMovieList = createAsyncThunk("getMovieList", async () => {
  const currentMovieList = await moviesApi.getMovieList();
  return currentMovieList;
});

export const getMovieDetails = createAsyncThunk("getMovieDetails", async () => {
  const currentMovieDetails = await moviesApi.getMovieDetails();
  return currentMovieDetails;
});

const movieListSlice = createSlice({
  name: "movieListSlice",
  initialState: {
    movies: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true;
    },

    [getMovies.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },

    [getMovieList.pending]: (state) => {
      state.loading = true;
    },

    [getMovieList.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMovieList.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },

    [getMovieDetails.pending]: (state) => {
      state.loading = true;
    },

    [getMovieDetails.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    [getMovieDetails.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
  },
});

const { reducer: movieListReducer, actions } = movieListSlice;
export const {  } = actions;
export default movieListReducer;
