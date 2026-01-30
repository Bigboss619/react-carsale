import React from 'react'
import { UserAuth } from "./AuthContext.jsx";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { session } = UserAuth();
      return <> {session ? <>{children}</> : <Navigate to="/register" />} </>;
  
};

export default PrivateRoute
