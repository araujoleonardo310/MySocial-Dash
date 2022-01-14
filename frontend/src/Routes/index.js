import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const Routes = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        {token && <Route exact path="/home" component={Home} />}
        {token && <Route exact path="/cadastro" component={Cadastro} />}
      </Switch>
    </Router>
  );
};
export default Routes;
