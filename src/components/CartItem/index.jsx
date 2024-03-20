import "./CartItem.scss";
// import { useCartStore } from "../../store/useCartStore";

// export const CartItem = ({ name, price, img, id }) => {
//     const removeFromCart = useCartStore(state => state.removeFromCart)
//     const handleRemove = () => {
//         removeFromCart(id);
//     }

//     return (
//         <div className="cart__item">
//             <img src={img} alt={name} />
//             <div>{name}</div>
//             <div>{price}</div>
//             <button onClick={handleRemove}>X</button>
//         </div>
//     )
// }import React from "react";
import React from "react";
import { useCartStore } from "../../store/useCartStore";

export const CartItem = ({ name, price, img, id }) => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartStore(
    (state) => ({
      cart: state.cart,
      incrementQuantity: state.incrementQuantity,
      decrementQuantity: state.decrementQuantity,
      removeFromCart: state.removeFromCart,
    })
  );

  const cartItem = cart.find(item => item.id === id);
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

  return (
    <div className="cart__item">
      <img src={img} alt={name} />
      <div>{name}</div>
      <div>${(price * quantity).toFixed(2)}</div>
      <div>
        <button onClick={handleIncrement}>+</button>
        <span>{quantity}</span>
        <button onClick={handleDecrement}>-</button>
      </div>
      {/* <div>Total: ${(price * quantity).toFixed(2)}</div> */}
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};


