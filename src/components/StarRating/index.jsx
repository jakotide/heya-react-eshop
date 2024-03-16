import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import "./StarRating.scss";

export const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }

  // Add half star if necessary
  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={stars.length} />);
  }

  // Add empty stars to complete 5 stars
  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<FontAwesomeIcon icon={farStar} key={stars.length} />);
  }

  return <div className="stars">{stars}</div>;
};



