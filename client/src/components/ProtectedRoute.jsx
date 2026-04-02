import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check if the user has a token in their browser memory
  const token = localStorage.getItem('token');

  // If there is no token, kick them back to the login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If they do have a token, let them see the page they requested
  return children;
};

export default ProtectedRoute;