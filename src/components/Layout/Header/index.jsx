import { Navigation }  from "../../Navigation";
import { Link } from "react-router-dom";
import "./Header.scss";
import { CartIcon } from "../../CartIcon";

export const Header = () => {
    return (
        <>
            <header className="header__container">
                <Link to="/" className="link">
                    <div className="logo">HEYA</div>
                </Link>
                <div className="nav__container">
                <Navigation />
                <CartIcon />
                </div>
            </header>
        </>
    )
}