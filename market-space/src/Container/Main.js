import React from "react";
import NavBar from "../Components/NavBar";
import Cart from "./Cart";
import Star from "./Star";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <Router basename = "MS">
    <div>
      <NavBar />
    </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/star" component={Star} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
};

export default Main;