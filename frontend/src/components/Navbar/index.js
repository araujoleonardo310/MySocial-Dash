import React from "react";
import "./style.scss";

import { AiOutlineUsergroupAdd, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

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
        <li>
          <span>
            <AiOutlineVideoCameraAdd />
          </span>
          <Link to={"/videos"}>Videos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
