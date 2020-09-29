import { configureStore } from "@reduxjs/toolkit";
import slidesReducer from "./slice/slidesSlice";
import movieListReducer from "./slice/movieListSlice";
import newPromotionReducer from "./slice/newPromotionSlice";
import blogReducer from "./slice/blogSlice";

const store = configureStore({
  reducer: {
  	slides: slidesReducer,
  	movies: movieListReducer,
  	promotion: newPromotionReducer,
  	blogs: blogReducer,
  },
});

export default store;
