import { configureStore } from "@reduxjs/toolkit";
import slidesReducer from "./slice/slidesSlice";
import movieReducer from "./slice/movieSlice";
import newPromotionReducer from "./slice/newPromotionSlice";
import blogReducer from "./slice/blogSlice";

const store = configureStore({
  reducer: {
  	slides: slidesReducer,
  	movies: movieReducer,
  	promotion: newPromotionReducer,
  	blogs: blogReducer,
  },
});

export default store;
