import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ChooseTicket from "../chooseticket/ChooseTicket";

const ChooseTickets = () => {
  return (
    <div className="choose-ticket-page">
      <Header />
      <ChooseTicket />
      <Footer />
    </div>	
  );
}
export default ChooseTickets;