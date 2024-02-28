import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UserRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const isUser = user?.role === "user" && user?.active === "open";

  if (loading) {
    return "loading";
  }

  if (user && isUser) {
    children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
