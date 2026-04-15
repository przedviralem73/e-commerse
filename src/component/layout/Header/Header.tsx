import {FC} from "react";
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <header>
            <Link to="/cart">CART</Link>
        </header>
    )
}

export default Header;