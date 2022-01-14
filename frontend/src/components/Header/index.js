import React from "react";
import "./style.scss";

import { LoginOut } from "../../Routes/Auth";

import profile from "../assets/img/dogUser.jpg";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

const Header = ({ title }) => {
  const history = useHistory()
 const handleLoginOut = () => {
    LoginOut();
    toast.success("Desconectado!")
    history.push("/");
  };

  return (
    <div className="header">
      <h2 className="title">{title}</h2>
      <div className="profileAndLogOut">
        <p>
          <img src={profile} alt="Profile" className="profile" />
        </p>
        <button onClick={handleLoginOut}>Sair</button>
      </div>
    </div>
  );
};

export default Header;
