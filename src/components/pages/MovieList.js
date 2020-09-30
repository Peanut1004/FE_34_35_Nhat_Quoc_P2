import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import MovieList from "../movielist/MovieList";

const MovieListPage = () => {
  return (
    <div className="moviepages">
      <Header />
      <div className="main">
        <MovieList />
      </div>
      <Footer />
    </div>	
  );
}
export default MovieListPage;