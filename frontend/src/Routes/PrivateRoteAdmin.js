import { Navigate } from "react-router-dom";

export const PrivateRouteAdmin = ({ children, redirecTo }) => {
  const token  = JSON.parse(localStorage.getItem("token"));
  const { status, tipo } = token;
  const isAuth = status === "active" && tipo === "admin" 
  console.log("IsAuth =", isAuth);
  return isAuth ? children : <Navigate to={redirecTo} />;
};

