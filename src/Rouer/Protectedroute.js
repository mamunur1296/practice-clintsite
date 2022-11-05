import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Protectedroute = ({ children }) => {
  const { user, loder } = useContext(AuthContext);
  const location = useLocation();
  if (loder) {
    return <h4 className="text-3xl">Loding ....</h4>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Protectedroute;
