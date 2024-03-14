import { Link } from "react-router-dom";
import { useState } from "react";
import "./MobileMenu.scss";

export const MobileMenu = () => {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="menu__container">
      <button onClick={toggleMenu}>Menu</button>
      {open && (
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
      )}
    </div>
  );
};
