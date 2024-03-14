import CartIconImage from "../../assets/images/cart.png";
import "./CartIcon.scss";
import { Link } from "react-router-dom";

export const CartIcon = () => {
    return (
        <Link to="/cart" className="cart__container">
            <img src={CartIconImage} alt="Cart icon" />
            <div>1</div>
        </Link>
    )
}