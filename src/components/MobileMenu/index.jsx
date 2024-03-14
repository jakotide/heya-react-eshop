import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import "./MobileMenu.scss";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
   
  };

  const menuTransition = { type: 'spring', stiffness: 500, damping: 30 };

  return (
    <div className="menu__container">
      <button onClick={toggleMenu}>Menu</button>
      <AnimatePresence>
      {open && (
        <motion.nav
        key={open ? 'open' : 'closed'} 
        className="mobile-menu"
        initial={{ x: '100%' }} 
        animate={{ x: open ? 0 : '100%' }} 
        transition={menuTransition} 
        exit={{x: '100%', transition: { type: 'spring', stiffness: 500, damping: 40 }}}
      >
        <menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </menu>
      </motion.nav>
      )}
      </AnimatePresence>

      
    </div>
  );
};

