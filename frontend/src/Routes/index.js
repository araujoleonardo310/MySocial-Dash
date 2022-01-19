import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthToken } from "./AuthToken";
import { PrivateRoute } from "./PrivateRote";
import { PrivateRouteAdmin } from "./PrivateRoteAdmin";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PageNotFound from "../pages/PageNotFound";

const routes = () => { 
  AuthToken()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute redirecTo={"/"}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/cadastro"
          element={
            <PrivateRouteAdmin redirecTo={"/home"}>
              <Cadastro />
            </PrivateRouteAdmin>
          }
        />
        <Route path="/:pageName" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default routes;
