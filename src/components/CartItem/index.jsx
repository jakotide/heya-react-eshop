import "./CartItem.scss";
import useMediaQuery from "../../hooks/useMediaQuery";

import React from "react";
import { useCartStore } from "../../store/useCartStore";

export const CartItem = ({ name, price, img, id }) => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useCartStore((state) => ({
      cart: state.cart,
      incrementQuantity: state.incrementQuantity,
      decrementQuantity: state.decrementQuantity,
      removeFromCart: state.removeFromCart,
    }));

  const cartItem = cart.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleIncrement = () => {
    incrementQuantity(id);
  };

  const handleDecrement = () => {
    decrementQuantity(id);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  const isMobile = useMediaQuery("max-width: 420px");

  return (
    <div className="cart__item">
      {!isMobile && <img src={img} alt={name} />}
      
      <div className="cart__product__details">
        <div>{name}</div>
        <button onClick={handleRemove} className="remove__btn">Remove</button>
      </div>

      <div>£{(price * quantity).toFixed(2)}</div>
      <div className="qty__button__container">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};
