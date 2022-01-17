import React from "react";
import profile from "../assets/img/dogUser.jpg";
import "./style.scss";

import toast from "react-hot-toast";

import { LoginOut } from "../../Routes/Auth";
import { useHistory } from "react-router-dom";

const Header = ({ title }) => {
  const history = useHistory();

  const handleLoginOut = () => {
    LoginOut();
    toast.success("Desconectado!");
    history.push("/");
  };

  return (
    <div className="header">
      <h2 className="title">{title}</h2>
      <div className="profileAndLogOut">
        <img src={profile} alt="Profile" className="profile" />
        <button onClick={handleLoginOut}>Sair</button>
      </div>
    </div>
  );
};

export default Header;
