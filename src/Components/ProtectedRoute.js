import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contest/AuthContext";
function ProtectedRoute({ children }) {
  const auth = UserAuth();
  if (!auth.user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
