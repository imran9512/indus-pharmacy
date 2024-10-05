import React from 'react';

const ProductReview = ({ reviewerName, reviewText, stars }) => {
  return (
    <div className="review-container">
      <p className="reviewer-name">{reviewerName}</p>
      <p className="review-text">{reviewText}</p>
      {/* Display stars using a rating component or styling */}
      <p className="review-stars">{stars} stars</p>
    </div>
  );
};

export default ProductReview;