import React from "react";
import './style.scss';
import Header from "../Header";
import Navbar from "../Navbar";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <Navbar />         
    </div>
  );
};

export default Container;
