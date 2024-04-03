import { useState, useEffect, createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode";

// Create a Context for authentication data
const AuthContext = createContext();

// Custom hook to enable easy access to the AuthContext
export const useAuth = () => useContext(AuthContext);

// Provider component to encapsulate the authentication logic and state
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

    // Effect hook to check for authentication token on component mount and decode user data
    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } catch (error) {
                console.error("Token decoding failed:", error);
                localStorage.removeItem("token");
                setToken(null);
            }
        }
    }, [token]);

    // Function to store token in local storage and update token state
    const storeToken = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    };

    // Function to handle user logout
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
    };

    // Derived state to check if user is authenticated
    const isAuthenticated = !!user;

    // Aggregate state and action handlers into a single object
    const value = { user, isAuthenticated, logout, storeToken, token };

    // Provide authentication state and handlers to child components
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
