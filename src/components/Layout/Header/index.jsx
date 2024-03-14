import { Navigation }  from "../../Navigation";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
    return (
        <>
            <header className="header__container">
                <Link to="/" className="link">
                    <div className="logo">HEYA</div>
                </Link>
                <Navigation />
            </header>
        </>
    )
}