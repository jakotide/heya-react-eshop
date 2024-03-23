import "./Product.scss";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { Button, StarRating, Reviews, DiscountTag } from "../../components";
import { useCartStore } from "../../store/useCartStore";
import React, { useEffect, useRef } from "react";

export const Product = () => {
  const topContainer = useRef();

  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);
  let params = useParams();
  const { data, isLoading, isError } = useApi(
    `https://api.noroff.dev/api/v1/online-shop/${params.id}`
  );

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(data);
  };

  return (
    <>
      <div ref={topContainer} />
      <div className="container-flex">
        <div className="product__page__container">
          <div className="product__page__top">
            <img src={data.imageUrl} alt={data.title} />
            <div className="product__page__info">
              <div>
                <h1>{data.title}</h1>
                <StarRating rating={data.rating}></StarRating>
              </div>

              <p>{data.description}</p>
              <div className="prev__price">
                {data.price > data.discountedPrice ? (
                  <>
                    <div>Was {data.price}£</div>
                    <DiscountTag
                      className="product__discount__tag"
                      discountedPrice={data.discountedPrice}
                      price={data.price}
                    />
                  </>
                ) : (
                  <div></div>
                )}
              </div>
              {data.discountedPrice ? (
                <div className="product__current__price">
                  Now {data.discountedPrice}£
                </div>
              ) : (
                <div className="product__current__price">
                  Only {data.price}£
                </div>
              )}
              <div className="product__cta">
                <Button variant="green" onClick={handleAddToCart}>
                  Add To Cart
                </Button>
                <Button variant="black" to="/cart">
                  Checkout
                </Button>
              </div>
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
    </>
  );
};
