import React from "react";

import { Router, Switch } from "react-router-dom";
import { history } from "./Root/CreateHistory";

import PrivateRoute from "./Root/PrivateRoute";
import PublicRoute from "./Root/PublicRoute";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/cadastro" component={Cadastro} />
      </Switch>
    </Router>
  );
};

export default Routes;
