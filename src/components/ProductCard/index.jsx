import "./ProductCard.scss";
import { Button } from "../ui/Button";
import { StarRating } from "../ui/StarRating";
import { DiscountTag } from "../ui/DiscountTag";

export const ProductCard = ({data}) => {
  return (
    <div className="product__card">
       <div className="product__image__container">
       <img src={data.imageUrl} alt={data.title} />
       <DiscountTag className="discount__tag" discountedPrice={data.discountedPrice} price={data.price}></DiscountTag>
        </div> 
  
      <div className="product__info">
        <h3>{data.title}</h3>
        <p>
            {data.description}
        </p>
   
    <StarRating className="stars" rating={data.rating}></StarRating> 
   
         
    
      </div>
      <div className="product__cta">
        <div className="card__price">{data.price}£</div>
        <Button variant="green" className="card__button">View</Button>  
      </div>
    </div>
  );
};
