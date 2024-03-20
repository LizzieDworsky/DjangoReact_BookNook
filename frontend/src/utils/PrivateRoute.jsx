import React from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

// Define a component to wrap protected routes
export default function PrivateRoute({ children }) {
    const { isAuthenticated } = useAuth();

    // Conditional rendering based on authentication status
    // If the user is authenticated, render the child components
    // Otherwise, redirect to the login page
    return isAuthenticated ? children : <Navigate to="/login" />;
}
