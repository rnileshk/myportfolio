import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";

export default function BasicExample() {
  const NoMatchPage = () => {
    return (
      <div className="not-found">
        <Link to=".." className="home__title centered">
          Visit Home Page
        </Link>
      </div>
    );
  };
  return (
    <Router basename="./">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/my-portfolio">
          <NoMatchPage />
        </Route>
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  );
}
