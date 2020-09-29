import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesApi from "../../api/moviesApi";

export const getMovieList = createAsyncThunk("getMovieList", async () => {
  const currentMovie = await moviesApi.getMovieList();
  return currentMovie;
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
  },
});

const { reducer: movieListReducer, actions } = movieListSlice;
export const {  } = actions;
export default movieListReducer;
