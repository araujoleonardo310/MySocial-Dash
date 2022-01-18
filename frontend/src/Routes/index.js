import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PageNotFound from "../pages/PageNotFound";

const routes = () => {
  let tokenValues = {
    name: "token",
    tipo: "not",
    status: "disable",
  };

  const setToken = (values) => {
    localStorage.setItem("token", JSON.stringify(values));
  };
  setToken(tokenValues);

  const getToken = () => JSON.parse(localStorage.getItem("token"));
  const { tipo, status } = getToken();
  console.log(tipo, status);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />

        {status === "active" ? (
          <Route exact path="/" element={<Login />} />
        ) : (
          <Route exact path="/home" element={<Home />} />
        )}

        {tipo === "admin" ? (
          <Route exact path="/cadastro" element={<Cadastro />} />
        ) : (
          <Route exact path="/" element={<Login />} />
        )}

        <Route exact path="/:pageName" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default routes;
