import React from 'react';
import './ProductImg.scss';

const ProductImg = ({ img }) => {
  return (
    <div className="productImg-box">
      <img src={img} className="productImg"></img>
    </div>
  );
};

export default ProductImg;
