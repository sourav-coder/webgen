import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import CreateProduct from "./CreateProduct";
import Product from "./Product";
import Register from "./Register";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/create" component={CreateProduct} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/update/:id" component={CreateProduct} />
      </Switch>
    </Router>
  );
}
