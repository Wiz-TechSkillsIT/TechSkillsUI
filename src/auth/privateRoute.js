import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    // Check if user data exists in localStorage
    const user = localStorage.getItem('user');

    // If user is logged in, render the children; otherwise, redirect to login
    return user ? children : <Navigate to="/auth" state={{ from: location }} replace />;
};

export default PrivateRoute;
