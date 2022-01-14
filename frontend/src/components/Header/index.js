import React from "react";
import "./style.scss";

import profile from "../assets/img/dogUser.jpg";

const Header = ({ title }) => {
  const handleLoginOut = () => {
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
