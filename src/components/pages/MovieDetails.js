import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import MovieDetails from "../moviedetails/MovieDetails";

const MovieDetailPage = () => {
  return (
    <div className="moviepages">
      <Header />
      <div className="main">
        <MovieDetails />
      </div>
      <Footer />
    </div>	
  );
}
export default MovieDetailPage;