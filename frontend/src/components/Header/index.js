import React from "react";
import "./style.scss";

import profile from "../assets/img/dogUser.jpg";

const Header = ({title}) => {
  return (
    <div className="header">
      <h2 className="title">{title}</h2>
      <div className="profileAndLogOut">
        <p>
          araujoleonardo310@gmail.com
          <img src={profile} alt="Profile" className="profile" />
        </p>
        <button>Sair</button>
      </div>
    </div>
  );
};

export default Header;
