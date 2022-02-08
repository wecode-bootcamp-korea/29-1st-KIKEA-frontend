import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import './ProductCard.scss';

const ProductCard = ({ kikea }) => {
  const { img, name, type, price, rating, reviewNums } = kikea;
  const [isCartVisible, setIsCartVisible] = useState(false);
  const showCart = e => {
    setIsCartVisible(true);
  };
  const hideCart = e => {
    setIsCartVisible(false);
  };
  return (
    <div
      onMouseOver={showCart}
      onMouseOut={hideCart}
      className="product-card-container"
    >
      <div className="product-img-wrapper">
        <img className="card-img" src={img} alt="product" />
      </div>
      <p className="product-name">{name}</p>
      <p className="product-type">{type}</p>
      <div className="add-cart-btn-container">
        <button
          className={
            'add-cart-btn-' + (isCartVisible === false ? 'hidden' : 'visible')
          }
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="shopping-cart-icon"
          />
        </button>
      </div>
      <div className="price-review-container">
        <div className="price-review-wrapper">
          <p className="won-symbol">
            ₩ <span className="product-price">{price}</span>
          </p>
        </div>
      </div>
      <div className="rating-container">
        <span className="rating">{rating}</span>
        <span className="review-nums">{reviewNums}</span>
      </div>
    </div>
  );
};

export default ProductCard;
