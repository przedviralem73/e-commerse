import {FC} from "react";
import {Link, useLocation} from "react-router-dom";
import './Header.css';

const Header: FC = () => {

    const location = useLocation();

    return (
        <header>
            <nav className="nav-links">
                <Link
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    Home
                </Link>

                <Link
                    to="/cart"
                    className={location.pathname === '/cart' ? 'active' : ''}
                    style={{position: 'relative'}}
                >
                    Cart
                </Link>

                <Link
                    to="/wishlist"
                    className={location.pathname === '/wishlist' ? 'active' : ''}
                >
                    Wishlist
                </Link>
            </nav>
        </header>
    )
}

export default Header;