import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getToken } from "./Auth";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PageNotFound from "../pages/PageNotFound";

const routes = () => {

  const token = getToken  
  
  return (
    <BrowserRouter>
      <Routes>
        {token && (
          <Route exact path="/" element={<Login />} />
        )}
        {!!token && (
          <Route exact path="/home" element={<Home />} />
        )}
        {token.typeAccont === "administrador" && (
          <Route exact path="/cadastro" element={<Cadastro />} />
        )}
        <Route exact path="/:pageName" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default routes;
