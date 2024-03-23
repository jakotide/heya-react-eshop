export const DiscountTag = ({ price, discountedPrice, className }) => {
  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100
  );

  if (discountPercentage > 0) {
    return <div className={className}>{discountPercentage}% off</div>;
  }

  return null;
};
