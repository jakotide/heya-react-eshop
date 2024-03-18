import { StarRating } from "../StarRating"
import "./Reviews.scss";

export const Reviews = ({ data }) => {
    return (
        <section className="reviews__container">
            <div className="review__flex">
            <div className="review__username">{data.username}</div>
            <StarRating rating={data.rating}></StarRating>
            </div>
            <div className="review__description">{data.description}</div>
        </section>
    )
}