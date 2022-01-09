import React from "react";
import "./style.scss";

import { AiOutlineUsergroupAdd, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="dash">MySocial Dash</h2>

      <ul className="list">
        <li><span><AiOutlineUsergroupAdd /></span>Cadastro</li>
        <li><span><FiUsers /></span>Usuários</li>
        <li><span><RiVideoLine /></span>Assistir</li>
        <li><span><AiOutlineVideoCameraAdd /></span>Novos Vídeos</li>
      </ul>
    </div>
  );
};

export default Navbar;
