import React from 'react';
import './ProductImg.scss';

const ProductImg = ({ img }) => {
  return (
    <div className="product-img-box">
      <img src={img} className="product-img" alt="product-img" />
    </div>
  );
};

export default ProductImg;
