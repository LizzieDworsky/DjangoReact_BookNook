import { Link } from "react-router-dom";
import { useAuth } from "../utils/useAuth";

const NavBar = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                BookNook
            </Link>

            {/* Navigation links: Logout for authenticated users, Login/Register for guests  */}
            <div className="navbar-links">
                {isAuthenticated ? (
                    <div className="navbar-link" onClick={() => logout()}>
                        Logout
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="navbar-link">
                            Login
                        </Link>
                        <Link to="/register" className="navbar-link">
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
