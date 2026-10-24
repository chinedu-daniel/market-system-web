import { Link } from "react-router-dom";
import "./StorefrontNavbar.css";

function StorefrontNavbar() {
    return (
        <nav className="storefront-navbar">
            <Link to="/products" className="storefront-brand">
                MMS Parts
            </Link>

            <div className="storefront-nav-links">
                <Link to="/products">Products</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup" className="signup-link">
                    Sign up
                </Link>
            </div>
        </nav>
    );
}

export default StorefrontNavbar;