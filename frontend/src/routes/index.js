import React from "react";

import { Router, Switch } from "react-router-dom";
import { history } from "../components/CreateHistory";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";

const Root = () => {
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

export default Root;
