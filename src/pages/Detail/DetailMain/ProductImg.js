import React from 'react';
import './ProductImg.scss';

const ProductImg = ({ image }) => {
  return (
    <div className="product-img-box">
      <img src={image} className="product-img" alt="product-img" />
    </div>
  );
};

export default ProductImg;
