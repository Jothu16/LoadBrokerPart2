import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Temporarily set to true for testing

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
