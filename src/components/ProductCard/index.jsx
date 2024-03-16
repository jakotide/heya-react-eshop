import "./ProductCard.scss";
import Image from "../../assets/images/cart.png";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  return (
    <div className="product__card">
      <img src={Image} alt="" />
      <div className="product__info">
        <h3>Nice</h3>
        <p>
          teste tesste stest
          steasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasds
        </p>
      </div>
      <div className="product__cta">
        <div className="card__price">Price</div>
        <Button variant="green" className="card__button">View</Button>
    
      </div>
    </div>
  );
};
