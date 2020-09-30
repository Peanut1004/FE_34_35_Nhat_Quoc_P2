import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ChooseSeat from "../chooseseat/ChooseSeat";

const ChooseSeats = () => {
  return (
    <div className="choose-seat-page">
      <Header />
      <ChooseSeat />
      <Footer />
    </div>	
  );
}
export default ChooseSeats;