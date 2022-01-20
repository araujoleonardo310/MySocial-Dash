import React, { useContext } from "react";
import "./style.scss";

import { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Context";
import { useNavigate } from "react-router-dom";

import profile from "../assets/img/dogUser.jpg";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const { username, setUsername, setTypeUser, setStatusUser } =
    useContext(AuthContext);

  const handleLoginOut = () => {
    setUsername("notUser");
    setTypeUser("null");
    setStatusUser("disable");
    navigate("/");
  };

  return (
    <div className="header">
      <Toaster />
      <h2 className="title">{title}</h2>
      <div className="profileAndLogOut">
        <p>Olá, {username}. Como você está?</p>
        <img src={profile} alt="Profile" className="profile" />
        <button onClick={handleLoginOut}>Sair</button>
      </div>
    </div>
  );
};

export default Header;
