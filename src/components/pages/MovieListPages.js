import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import MovieListPage from "../home/MovieListPage";

const MovieListPages = () => {
  return (
    <div className="homepages">
      <Header />
      <div className="main">
        <MovieListPage />
      </div>
      <Footer />
    </div>	
  );
}
export default MovieListPages;