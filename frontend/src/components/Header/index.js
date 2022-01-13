import React from "react";
import "./style.scss";

import { LoginOut } from "../../Routes/Auth";

import profile from "../assets/img/dogUser.jpg";
import { history } from "../CreateHistory";

const Header = ({title}) => {
  const handleLoginOut = () => {
    LoginOut()
    history.push("/")

  }
  return (
    <div className="header">
      <h2 className="title">{title}</h2>
      <div className="profileAndLogOut">
        <p>
          araujoleonardo310@gmail.com
          <img src={profile} alt="Profile" className="profile" />
        </p>
        <button onClick={handleLoginOut}>Sair</button>
      </div>
    </div>
  );
};

export default Header;
