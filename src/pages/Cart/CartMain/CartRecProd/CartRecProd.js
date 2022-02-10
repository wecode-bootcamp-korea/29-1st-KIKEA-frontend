import React from 'react';
import './CartRecProd.scss';

const CartRecProd = ({ mainSrc, name, type, unit, price, review }) => {
  return (
    <div className="rec-products-wrap">
      <img className="rec-products-img" src={mainSrc} alt="rec-products-img" />
      <div className="rec-products-comment-wrap">
        <div className="rec-products-name">{name}</div>
        <div className="rec-products-type">{type}</div>
        <span className="rec-products-price-unit">{unit}</span>
        <span className="rec-products-price">{price}</span>
        <span className="rec-products-review">{review}</span>
      </div>
    </div>
  );
};

export default CartRecProd;
