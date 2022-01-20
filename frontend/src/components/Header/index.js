import React, { useContext, useEffect } from "react";
import "./style.scss";

import toast, { Toaster } from "react-hot-toast";
import profile from "../assets/img/dogUser.jpg";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context";

const Header = (props) => {
  const { username, setUsername, setTypeUser, setStatusUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLoginOut = () => {
    setUsername("notUser");
    setTypeUser("null");
    setStatusUser("disable");
    navigate("/");
  };

  return (
    <div className="header">
      <Toaster />
      <h2 className="title">{props.title}</h2>
      <div className="profileAndLogOut">
        <p>Olá, {username}. Como você está?</p>
        <img src={profile} alt="Profile" className="profile" />

        <button onClick={handleLoginOut}>Sair</button>
      </div>
    </div>
  );
};

export default Header;
