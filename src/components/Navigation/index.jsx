import "./Navigation.scss";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </menu>
      </nav>
    </>
  );
};
