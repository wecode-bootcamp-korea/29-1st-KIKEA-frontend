import React from 'react';
import './DetailRecProd.scss';

const DetailRecProd = ({ name, type, price, image }) => {
  return (
    <div className="rec-products-wrap">
      <img src={image} className="rec-products-img" alt="rec-products-img" />
      <div className="rec-products-comment-wrap">
        <div className="rec-products-name">{name}</div>
        <div className="rec-products-type">{type}</div>
        <span className="rec-products-price-unit">₩</span>
        <span className="rec-products-price">{price.toLocaleString()}</span>
        <span className="rec-products-review">★★★★</span>
      </div>
    </div>
  );
};

export default DetailRecProd;
