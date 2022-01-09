import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import "./style.scss";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <Navbar />
    </div>
  );
};

export default Container;
