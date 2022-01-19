import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, redirecTo }) => {
  const isAuth = localStorage.getItem("token") === true
  console.log("IsAuth", isAuth);
  return isAuth ? children : <Navigate to={redirecTo} />;
};
