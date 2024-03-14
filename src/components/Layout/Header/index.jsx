import { Navigation }  from "../../Navigation";
import { MobileMenu } from "../../MobileMenu";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import "./Header.scss";
import { CartIcon } from "../../CartIcon";

export const Header = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    
    return (
        <>
            <header className="header__container">
                <Link to="/" className="link">
                    <div className="logo">HEYA</div>
                </Link>
                <div className="nav__container">
                    {isMobile ? <MobileMenu /> : <Navigation />}    
                    <CartIcon />
                </div>
            </header>
        </>
    );
};
