import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Slider from "../home/Slider";
import MovieListHome from "../home/MovieListHome";
import MovieVideo from "../home/MovieVideo";
import NewPromotion from "../home/NewPromotion";
import Blog from "../home/Blog";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="main">
        <Slider />
      	<MovieListHome />
        <MovieVideo />
        <NewPromotion />
        <Blog />
      </div>
      <Footer />
    </div>	
  );
}
export default Home;