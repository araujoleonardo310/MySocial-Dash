import React from "react";
import "./style.scss";

import Header from "../Header";
import Navbar from "../Navbar";

const Container = (props) => {
  return (
    <div className="container">
      <Header title={props.section} />
      <Navbar />
      <div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Container;
