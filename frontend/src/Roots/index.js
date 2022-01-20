import React, { useContext } from "react";

import { AuthContext } from "../Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute, PrivateRouteAdmin } from "./PrivateRoutes";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PageNotFound from "../pages/PageNotFound";


const Roots = () => {
  const { username, typeUser, statusUser } = useContext(AuthContext);
  console.log(
    "username",
    username,
    "typeUser",
    typeUser,
    "statusUser",
    statusUser
  );

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute redirecTo={"/"} statusUser={statusUser}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/cadastro"
          element={
            <PrivateRouteAdmin
              redirecTo={"/home"}
              statusUser={statusUser}
              typeUser={typeUser}
            >
              <Cadastro />
            </PrivateRouteAdmin>
          }
        />

        <Route path="/:pageName" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Roots;
