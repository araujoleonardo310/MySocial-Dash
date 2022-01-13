import React from "react";
import "./style.scss";

import { LoginOut } from "../../Root/Auth";

import profile from "../assets/img/dogUser.jpg";
import { history } from "../../Root/CreateHistory";

const Header = ({ title }) => {
 const handleLoginOut = () => {
    LoginOut();
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
