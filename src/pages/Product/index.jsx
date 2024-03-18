import "./Product.scss";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { StarRating } from "../../components/ui/StarRating";
import { DiscountTag } from "../../components/ui/DiscountTag";
import { Reviews } from "../../components/ui/Reviews";
import { Button } from "../../components";

export const Product = () => {
  let params = useParams();
  const { data, isLoading, isError } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${params.id}`
  );

  return (
    <div className="container-flex">
      <div className="product__page__container">
        <div className="product__page__top">
          <img src={data.imageUrl} alt={data.title} />
          <div className="product__page__info">
            <h1>{data.title}</h1>
            <StarRating rating={data.rating}></StarRating>
            <p>{data.description}</p>
            <div className="prev__price">
              <div>{data.price}</div>
              <DiscountTag
                className="discount__tag"
                discountedPrice={data.discountedPrice}
                price={data.price}
              />
            </div>

            <div>{data.discountedPrice}</div>
            <Button>YELLO</Button>
          </div>
        </div>

        <div className="product__review__section">
          <h2>Reviews:</h2>
          {data.reviews && data.reviews.length > 0 ? (
            data.reviews.map((item) => <Reviews data={item} key={item.id} />)
          ) : (
            <p>No reviews yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};
