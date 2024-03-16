import { Children } from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export const Button = ({ variant, onClick, children, className, to }) => {
  return (
    <Link onClick={onClick} to={to} className={`button__styles ${className} ${variant}`}>
      {children}
    </Link>
  );
};
