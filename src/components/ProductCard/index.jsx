import "./ProductCard.scss";
import { Button } from "../ui/Button";
import { StarRating } from "../ui/StarRating";
import { DiscountTag } from "../ui/DiscountTag";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useCartStore } from "../../store/useCartStore";

export const ProductCard = ({ data }) => {

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(data);
  } 

  const [isHover, setIsHover] = useState(false);
  return (
    <div className="product__card" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div className="product__image__container">
        <Link to={`/product/${data.id}`}>
          <img src={data.imageUrl} alt={data.title} />
        </Link>

        <DiscountTag
          className="discount__tag"
          discountedPrice={data.discountedPrice}
          price={data.price}
        ></DiscountTag>
      </div>

      <div className="product__info">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="add__container">
          <StarRating className="stars" rating={data.rating}></StarRating>
          <AnimatePresence>
            {isHover && (
                            <motion.button 
                            onClick={handleAddToCart}
                            className="add__button display-block"
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.2, ease: "easeIn"}}
                            exit={{opacity: 0, y: 10}}
                            >
                              Add to cart
                            </motion.button>
            )}

          </AnimatePresence>
        </div>
      </div>
      <div className="product__cta">
        <div className="card__price">{data.price}£</div>
        <Button
          variant="green"
          className="card__button"
          to={`/product/${data.id}`}
        >
          View
        </Button>
      </div>
    </div>
  );
};
