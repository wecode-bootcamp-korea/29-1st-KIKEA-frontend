import React from 'react';
import './CartRecProd.scss';

const CartRecProd = ({ name, price, type, image }) => {
  return (
    <div className="rec-products-wrap">
      <img className="rec-products-img" src={image} alt="rec-products-img" />
      <div className="rec-products-comment-wrap">
        <div className="rec-products-name">{name}</div>
        <div className="rec-products-type">{type}</div>
        <span className="rec-products-price-unit">₩</span>
        <span className="rec-products-price">{price}</span>
        <span className="rec-products-review">ㅇㅇ</span>
      </div>
    </div>
  );
};

export default CartRecProd;
