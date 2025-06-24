import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useContext(UserContext);

  const isAuthorized = user && user.isAdmin;

  return isAuthorized ? children : <Navigate to="/LogIn" replace />;
};

export default ProtectedRoute;
