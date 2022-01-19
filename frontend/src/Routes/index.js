import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRote";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PageNotFound from "../pages/PageNotFound";

const routes = () => {
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
            <PrivateRoute redirecTo={"/home"}>
              <Cadastro />
            </PrivateRoute>
          }
        />
        <Route path="/:pageName" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default routes;
