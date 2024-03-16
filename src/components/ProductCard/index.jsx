import "./ProductCard.scss";
import { Button } from "../ui/Button";
import { StarRating } from "../StarRating/index.jsx";

export const ProductCard = ({data}) => {
  return (
    <div className="product__card">
      <img src={data.imageUrl} alt={data.title} />
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
