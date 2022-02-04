import React from 'react';
import './CartBox.scss';

const CartBox = ({ name, type, price }) => {
  return (
    <div className="cart-box-container">
      <div className="cart-box">
        <img
          src="https://www.ikea.com/kr/ko/images/products/vimle-2-seat-sofa-bed-with-wide-armrests-hallarp-beige__0952172_pe801617_s3.jpg"
          className="cart-products-img"
          alt="product-img"
        />
        <div className="cart-products-container">
          <div className="cart-products-box">
            <div className="cart-product-info">
              <div className="cart-product-name">{name}</div>
              <div className="cart-product-type">{type}</div>
            </div>
            <div className="cart-product-price">₩{price}</div>
          </div>
          <div className="cart-product-btn-box">
            <select className="cart-product-value-select">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button className="delete-btn">삭제</button>
            <button className="add-wishlist">위시리스트 저장</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
