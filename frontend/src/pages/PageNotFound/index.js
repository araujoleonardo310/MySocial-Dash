import React from "react";
import "./style.scss";

import { useParams } from "react-router-dom";

const PageNotFound = () => {
  const params = useParams();
  return (
    <div className="PageNotFound">
      <p>"{params.pageName}" não encontrada!</p>
    </div>
  );
};

export default PageNotFound;
