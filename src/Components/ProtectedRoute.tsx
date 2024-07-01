import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

interface ProtectedRouteProps {
  children: JSX.Element;
  adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  adminOnly = false,
}) => {
  const { user } = useContext(UserContext);

  if (!user || (adminOnly && !user.isAdmin)) {
    return <Navigate to="/LogIn" replace />; // toast: you cannot enter here you must be anAdmin
  }

  return children;
};

export default ProtectedRoute;
