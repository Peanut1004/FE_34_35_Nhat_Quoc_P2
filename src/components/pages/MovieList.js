import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import MovieList from "../movielist/MovieList";

const MovieListPage = () => {
  return (
    <div className="movie-page">
      <Header />
      <MovieList />
      <Footer />
    </div>	
  );
}
export default MovieListPage;