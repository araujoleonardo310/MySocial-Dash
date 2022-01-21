import React, { useContext } from "react";
import "./style.scss";

import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

import profile from "../assets/img/dogUser.jpg";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const { username, setUsername, setTypeUser, setStatusUser } =
    useContext(AuthContext);

  const handleLoginOut = () => {
    toast.success("Desconectado!");
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
        <p>
          Olá, {username}. Como você está?{" "}
          <img src={profile} alt="Profile" className="profile" />
        </p>

        <button onClick={handleLoginOut}>
          <BiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Header;
