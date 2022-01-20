import React from "react";
import "./style.scss";

import { useNavigate, useParams } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const params = useParams();

  function handleReturn() {
    return navigate("/");
  }
  return (
    <div className="PageNotFound">
      <div className="container">
        <p><span>"{params.pageName}"</span> não foi encontrada! 😓</p>
        <button onClick={handleReturn} className="btn">desejar voltar?</button>
      </div>
    </div>
  );
};

export default PageNotFound;
