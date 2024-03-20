import { useState, useEffect, createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode";

// Create a Context for authentication data
const AuthContext = createContext();

// Custom hook to enable easy access to the AuthContext
export const useAuth = () => useContext(AuthContext);

// Provider component to encapsulate the authentication logic and state
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Effect hook to check for authentication token on component mount and decode user data
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded);
            } catch (error) {
                localStorage.removeItem("token");
            }
        }
        console.log(isAuthenticated);
    }, []);

    // Function to store token in local storage and update user state
    const storeToken = (token) => {
        localStorage.setItem("token", token);
        try {
            const decoded = jwtDecode(token);
            setUser(decoded);
        } catch (error) {
            localStorage.removeItem("token");
        }
    };

    // Function to handle user logout
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    // Derived state to check if user is authenticated
    const isAuthenticated = !!user;

    // Aggregate state and action handlers into a single object
    const value = { user, isAuthenticated, logout, storeToken };

    // Provide authentication state and handlers to child components
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
