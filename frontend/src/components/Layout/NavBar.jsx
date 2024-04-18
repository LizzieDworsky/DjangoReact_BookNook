import { Link } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import "./NavBar.css";

const NavBar = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                BookNook
            </Link>

            {/* Navigation links: Logout for authenticated users, Login/Register for guests  */}
            {isAuthenticated ? (
                <div className="navbar-links">
                    <Link to="/favorites" className="navbar-link">
                        Favorites
                    </Link>
                    <div className="navbar-link" onClick={() => logout()}>
                        Logout
                    </div>
                </div>
            ) : (
                <div className="navbar-links">
                    <Link to="/login" className="navbar-link">
                        Login
                    </Link>
                    <Link to="/register" className="navbar-link">
                        Register
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
