import { Navigate } from "react-router-dom";

export const PrivateRoute = ({statusUser,  children, redirecTo}) => {
  let isAuth = statusUser !== "disable";
  return isAuth ? children : <Navigate to={redirecTo} />;
};

export const PrivateRouteAdmin = ({statusUser, typeUser,  children, redirecTo }) => {
  let isAuth = statusUser === "active" && typeUser === "admin" 
  return isAuth ? children : <Navigate to={redirecTo} />;
};
