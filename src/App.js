import React from "react";
import "./scss/styles.scss";
import Home from "./components/pages/Home";
import MovieListPages from "./components/pages/MovieListPages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from "./routers";

const App = () => {
  const showContentMenus = (routers) => {
    return routers.map((router, index) => (
      <Route
        key={index}
        path={router.path}
        exact={router.exact}
        component={router.main}
      />
    ));
  };

  return (
    <div>
      <Router>
        <Switch>{showContentMenus(routers)}</Switch>
      </Router>
    </div>
  );
}

export default App;
