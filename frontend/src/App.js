import React from "react";
import Routes from "./Routes";

const App = () => {
  console.log(localStorage.getItem("token"));
  return <Routes />;
};

export default App;
