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
      <p>
        "{params.pageName}" não encontrada!{" "}
      </p>
        <button onClick={handleReturn}>desejar voltar?</button>
    </div>
  );
};

export default PageNotFound;
