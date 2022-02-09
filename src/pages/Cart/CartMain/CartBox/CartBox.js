import React from 'react';
import './CartBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartBox = ({
  id,
  name,
  quantity,
  default_image,
  total_price,
  type,
  onRemove,
  handleAdd,
  handleMinus,
}) => {
  return (
    <div className="cart-box-container">
      <div className="cart-box">
        <img
          src={default_image}
          className="cart-products-img"
          alt="product-img"
        />
        <div className="cart-products-container">
          <div className="cart-products-box">
            <div className="cart-product-info-box">
              <div className="cart-product-name">{name}</div>
              <div className="cart-product-type">{type}</div>
            </div>
            <div className="cart-product-price">
              ₩{total_price?.toLocaleString()}
            </div>
          </div>
          <div className="cart-product-btn-box ">
            <div className="cart-product-qty-box">
              <button
                className="cart-product-minus-btn"
                onClick={() => handleMinus(id)}
              >
                <FontAwesomeIcon icon={faMinus} className="cart-minus-icon" />
              </button>
              <div className="cart-product-qty">{quantity}</div>
              <button
                className="cart-product-add-btn"
                onClick={() => handleAdd(id)}
              >
                <FontAwesomeIcon icon={faPlus} className="cart-prev-icon" />
              </button>
            </div>
            <button className="delete-btn" onClick={() => onRemove(id)}>
              삭제
            </button>
            <button className="add-wishlist">위시리스트 저장</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
