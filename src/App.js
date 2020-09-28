import React from "react";
import Home from "./components/pages/Home";
import "./scss/styles.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return(
  	<div>
      <Router>
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
