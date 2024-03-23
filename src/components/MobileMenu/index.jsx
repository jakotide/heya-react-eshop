import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

import "./MobileMenu.scss";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    setActive(!active);
  };

  const menuTransition = { type: "spring", stiffness: 500, damping: 30 };

  return (
    <div className="menu__container">
      <MotionConfig
        transition={{
          duration: 0.3,
        }}
      >
        <motion.button
          initial={false}
          onClick={toggleMenu}
          className="hamburger__button"
          animate={active ? "opened" : "closed"}
        >
          <motion.span
            style={{
              left: "50%",
              top: "35%",
              x: "-50%",
              y: "-50%",
            }}
            className="line"
            variants={{
              opened: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          />
          <motion.span
            style={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="line"
            variants={{
              opened: {
                opacity: 0,
              },
              closed: {
                opacity: 1,
              },
            }}
          />
          <motion.span
            style={{
              left: "50%",
              bottom: "35%",
              x: "-50%",
              y: "50%",
            }}
            className="line"
            variants={{
              opened: {
                rotate: ["0deg", "0deg", "-45deg"],
                bottom: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
                bottom: ["50%", "50%", "35%"],
              },
            }}
          />
        </motion.button>
      </MotionConfig>

      <AnimatePresence>
        {open && (
          <motion.nav
            key={open ? "open" : "closed"}
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: open ? 0 : "100%" }}
            transition={menuTransition}
            exit={{
              x: "100%",
              transition: { type: "spring", stiffness: 500, damping: 40 },
            }}
          >
            <menu>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <div className="mobile__menu__logo">H2024</div>
            </menu>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
