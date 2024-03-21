import { useState, useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../utils/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const { storeToken, isAuthenticated } = useAuth();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    // Effect hook to redirect user to HomePage if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    // Handler for input change to update credentials state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    // Handle form submission and login axios post request
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                credentials
            );
            const token = response.headers["x-auth-token"];
            if (token) {
                storeToken(token);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="auth-form-container">
            <h1 className="auth-header">Login</h1>
            {/* Login form render */}
            <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={(e) => handleChange(e)}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
