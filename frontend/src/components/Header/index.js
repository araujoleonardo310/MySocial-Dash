import React from "react";
import "./style.scss";

import toast from "react-hot-toast";

import { useNavigate, useLocation } from "react-router-dom";

import profile from "../assets/img/dogUser.jpg";

const Header = (props) => {
  const navigate = useNavigate();

  const user = new URLSearchParams(useLocation().search);

  const handleLoginOut = () => {
    localStorage.setItem(
      "token",
      JSON.stringify({ name: "token", tipo: "null", status: "disable" })
    );
    toast.success("Desconectado!");
    navigate("/");
  };

  return (
    <div className="header">
      <h2 className="title">{props.title}</h2>
      <div className="profileAndLogOut">

        <p>Hello, {user.get("name")}. How's going?</p>
        <img src={profile} alt="Profile" className="profile" />

        <button onClick={handleLoginOut}>Sair</button>
      </div>
    </div>
  );
};

export default Header;
