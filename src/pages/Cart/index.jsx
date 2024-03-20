import "./Cart.scss";
import { CartItem } from "../../components/CartItem";
import { useCartStore } from "../../store/useCartStore";

export const Cart = () => {
  const { cart } = useCartStore();
  return (
    <div className="cart__page__container">
      <h1>Cart</h1>
      <div className="cart__item__titles">
        <div></div>
        <div>Product</div>
        <div>Price</div>
        <div>Qty</div>
        <div></div>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.title}
            img={item.imageUrl}
            alt={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
