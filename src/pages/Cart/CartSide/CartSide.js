import React, { useState, useEffect } from 'react';
import './CartSide.scss';

const CartSide = ({ cartBox }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    if (cartBox) {
      getTotal(cartBox);
    }
  }, [cartBox]);

  const getTotal = cartItems => {
    let totalPrice = 0;

    cartItems.result?.map(cartItem => (totalPrice += cartItem.total_price));

    setTotal(totalPrice);
    console.log(total);
    console.log(typeof total);
  };

  console.log(cartBox);

  return (
    <div className="cart-side-container">
      <div className="cart-side-order-box">
        <h1 className="cart-order-list">주문 내역</h1>
        <div className="cart-order-delivery-box">
          <span className="cart-order-all-delivery-fee">전체 배송비</span>
          <span className="cart-order-all-delivery-fee-comment">
            이 금액에는 배송비가 포함되어 있지 않습니다.
          </span>
        </div>
        <div className="cart-order-all-price-box">
          <span className="cart-order-all-price-comment">총 주문금액</span>
          <span className="cart-order-all-price">₩ {total}</span>
        </div>
      </div>
      <div className="cart-side-login-box">
        <h1 className="cart-login-title">로그인</h1>
        <div className="cart-login-comment">
          <span className="cart-login-comment-prev">로그인 또는 회원가입</span>
          <span className="cart-login-comment-next">
            하면 더 편리하게 이용하실 수 있어요.
          </span>
        </div>
      </div>
      <div className="cart-side-pay-box">
        <button className="cart-pay-title">결제하기</button>
      </div>
    </div>
  );
};

export default CartSide;
