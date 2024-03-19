import CartIconImage from "../../assets/images/cart.png";
import "./CartIcon.scss";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";

export const CartIcon = () => {
  
    const cart = useCartStore((state) => state.cart);
    const itemCount = cart.length;


  return (
    <Link to="/cart" className="cart__container">
      <img src={CartIconImage} alt="Cart icon" />
        {itemCount > 0 && <div>{itemCount}</div>}
    </Link>
  );
};
