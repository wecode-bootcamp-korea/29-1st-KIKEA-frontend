import React from 'react';
import './CartSide.scss';

const CartSide = () => {
  return (
    <div className="side-container">
      <div className="side-order-box">
        <h1 className="order-list">주문 내역</h1>
        <div className="order-delivery-box">
          <span className="order-all-delivery-fee">전체 배송비</span>
          <span className="order-all-delivery-fee-comment">
            이 금액에는 배송비가 포함되어 있지 않습니다.
          </span>
        </div>
        <div className="order-all-price-box">
          <span className="order-all-price-comment">총 주문금액</span>
          <span className="order-all-price">₩ 1,009,000</span>
        </div>
      </div>
      <div className="side-login-box">
        <h1 className="login-title">로그인</h1>
        <div className="login-comment">
          <span className="login-comment-prev">로그인 또는 회원가입</span>
          <span className="login-comment-next">
            하면 더 편리하게 이용하실 수 있어요.
          </span>
        </div>
      </div>
      <div className="side-pay-box">
        <button className="pay-title">결제하기</button>
      </div>
    </div>
  );
};

export default CartSide;
