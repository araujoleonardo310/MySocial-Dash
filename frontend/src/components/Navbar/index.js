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
        <li className="section"><span className="icon"><AiOutlineUsergroupAdd /></span>Cadastro</li>
        <li className="section"><span className="icon"><FiUsers /></span>Usuários</li>
        <li className="section"><span className="icon"><RiVideoLine /></span>Assistir</li>
        <li className="section"><span className="icon"><AiOutlineVideoCameraAdd /></span>Novos Vídeos</li>
      </ul>
    </div>
  );
};

export default Navbar;
