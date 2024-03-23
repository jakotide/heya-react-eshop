import "./Footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__content__container">
        <div className="footer__top__container">
          <Link to="/" className="footer__logo">
            HEYA
          </Link>
          <div className="socials">
            <div>F</div>
            <div>T</div>
            <div>Y</div>
          </div>
        </div>
        <div className="dev">Jakob Tidemand 2024</div>
      </div>
    </footer>
  );
};
