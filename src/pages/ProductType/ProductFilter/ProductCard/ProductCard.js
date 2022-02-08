import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import './ProductCard.scss';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ kikea }) => {
  const { default_image, name, type, price, rating, reviewNums } = kikea;
  const [isCartVisible, setIsCartVisible] = useState(false);
  const navigate = useNavigate();

  const showCart = e => {
    setIsCartVisible(true);
  };
  const hideCart = e => {
    setIsCartVisible(false);
  };
  const toDetail = () => {
    navigate('/detail');
  };

  return (
    <div
      onMouseOver={showCart}
      onMouseOut={hideCart}
      className="product-card-container"
    >
      <div className="product-img-wrapper" onClick={toDetail}>
        <img className="card-img" src={default_image} alt="product" />
      </div>
      <p className="product-name" onClick={toDetail}>
        {name}
      </p>
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
            ₩{' '}
            <span className="product-price">
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
          </p>
        </div>
      </div>
      <div className="rating-container" style={{ width: `${rating}` * 16 }}>
        <img src="/images/star.png" alt="star" className="review-star" />
        <img
          src="/images/blackStar.png"
          alt="star"
          className="review-star-black"
        />
        <span className="review-nums">({reviewNums})</span>
      </div>
    </div>
  );
};

export default ProductCard;
