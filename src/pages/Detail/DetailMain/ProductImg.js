import React from 'react';
import './ProductImg.scss';

const ProductImg = ({ img }) => {
  return (
    <div className="productImg-box">
      <img src={img} className="productImg" alt="product-Img" />
    </div>
  );
};

export default ProductImg;
