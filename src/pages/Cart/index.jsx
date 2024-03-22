import "./Cart.scss";
import { CartItem } from "../../components/CartItem";
import { useCartStore } from "../../store/useCartStore";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";


export const Cart = () => {
  const { cart, clearCart, getTotalSum } = useCartStore();

  const totalSum = getTotalSum();

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart__page__container">
      <div className="cart__content__container">
        <div className="left__container">
          <h1>Cart</h1>
          <div className="cart__item__titles">
            <div></div>
            <div>Product</div>
            <div>Price</div>
            <div className="qty">Qty</div>
            <div></div>
          </div>
          <div>
            {cart.length === 0 ? (
              <div className="empty">Cart is empty</div>
            ) : (
              cart.map((item) => (
                <CartItem
                  id={item.id}
                  key={item.id}
                  name={item.title}
                  img={item.imageUrl}
                  alt={item.title}
                  price={item.price}
                />
              ))
            )}
          </div>
        </div>

        <div className="total__container">
          <h2>Summary</h2>
          <div>
            <h3>Shipping</h3>
            <select name="" id="">
              <option value="">Home - Free</option>
              <option value="">Pickup Point - Free</option>
            </select>
          </div>

          <div>
            <form>
              <h3>Promo Code</h3>
              <label htmlFor="promo"></label>
              <input
                type="text"
                id="promo"
                pattern="apple"
                title="Promo code is not valid. Please enter 'apple'."
                required
              />
              <Button variant="green" className="apply__btn" type="submit">
                Apply
              </Button>
            </form>
          </div>
          <div className="total__price">
            <h3>Total</h3>
            <div>£{totalSum.toFixed(1)}</div>
          </div>
          <Button variant="black" className="cart__checkout__btn" to="/success">
            Checkout
          </Button>
        </div>
      </div>
      <div className="clear__cart__container">
        <Link to="/">Continue Shopping</Link>
        <button className="clear__btn" onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

