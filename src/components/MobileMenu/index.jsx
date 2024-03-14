import { Link } from "react-router-dom";
import { useState} from "react";

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
      <button oncClick={toggleMenu}>
        Menu
      </button>
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
    </div>
  );
};
