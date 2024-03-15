import { Children } from "react";
import "./Button.scss";

export const Button = ({ variant, onClick, children, className }) => {
   

    return (
        <button onClick={onClick} className={`${className} ${variant}`}>
            {children}
        </button>
    )
}