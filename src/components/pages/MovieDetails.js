import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import MovieDetails from "../moviedetails/MovieDetails";

const MovieDetailPage = () => {
  return (
    <div className="movie-page">
      <Header />
      <MovieDetails />
      <Footer />
    </div>	
  );
}
export default MovieDetailPage;