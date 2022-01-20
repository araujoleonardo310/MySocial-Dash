import React from "react";

import "./style.scss";

import Header from "../Header";
import Navbar from "../Navbar";

const Container = ({title, children}) => {
  return (
    <div className="container">
      <Header title={title}/>
      <Navbar />
      <div className="childrens">{children}</div>
    </div>
  );
};

export default Container;
