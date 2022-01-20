import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, redirecTo }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { status } = token;
  const isAuth = status !== "disable";
  return isAuth ? children : <Navigate to={redirecTo} />;
};
