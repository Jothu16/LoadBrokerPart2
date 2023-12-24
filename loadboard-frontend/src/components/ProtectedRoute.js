import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = false; // Replace with real authentication check

  return (
    <Route
      {...rest}
      element={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default ProtectedRoute;

