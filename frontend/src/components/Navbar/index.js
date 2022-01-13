import React from "react";
import "./style.scss";

import { Link } from "react-router-dom";

import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="dash">MySocial Dash</h2>

      <ul className="list">
        <li>
          <span>
            <FiUsers />
          </span>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <span>
            <AiOutlineUsergroupAdd />
          </span>
          <Link to={"/cadastro"}>Cadastro</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
