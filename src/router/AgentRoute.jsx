import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAgent from "../hooks/useAgent";
import { AuthContext } from "../provider/AuthProvider";

const AgentRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const isAgent = user?.role === "admin" && user?.active === "open";
  
  if (loading) {
    return "loading";
  }

  if (user && isAgent) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AgentRoute;
