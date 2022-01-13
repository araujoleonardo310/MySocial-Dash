import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../Auth";

const PublicRoute = (props) =>
  isLogged() ? <Redirect to="/home" /> : <Route {...props} />;

export default PublicRoute;
