import React from "react";
import "./style.scss";

import Header from "../Header";
import Navbar from "../Navbar";

const Container = (props) => {
  return (
    <div className="container">
      <Header title={props.section}/>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Container;
