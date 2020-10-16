import { Route, Redirect } from "react-router-dom";
import React from 'react'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const authenticated = useSelector(state => state.authenticated)
  return (
    <Route
      render={() =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute