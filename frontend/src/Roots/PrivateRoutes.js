import { Navigate } from "react-router-dom";

export const PrivateRoute = ({statusUser,  children, redirecTo,  Navigate}) => {
  const isAuth = statusUser !== "disable";
  return isAuth ? children : <Navigate to={redirecTo} />;
};

export const PrivateRouteAdmin = ({statusUser, typeUser,  children, redirecTo }) => {
  const isAuth = statusUser === "active" && typeUser === "admin" 
  console.log("IsAuth =", isAuth);
  return isAuth ? children : <Navigate to={redirecTo} />;
};
