import React, { useEffect } from "react";
import "./style.scss";

import toast from "react-hot-toast";
import profile from "../assets/img/dogUser.jpg";

import { useNavigate, useLocation } from "react-router-dom";


const Header = (props) => {
  const user = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();


  const handleLoginOut = () => {
    localStorage.clear()
    toast.success("Desconectado!");
    navigate("/");
  };

  useEffect(() => {
    localStorage.clear()
    
  }, [])

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
