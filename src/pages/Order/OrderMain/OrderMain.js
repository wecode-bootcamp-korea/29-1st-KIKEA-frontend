import React from 'react';

const OrderMain = () => {
  return (
    <div className="ordermain">
      <div className="ordermain-container">
        <div className="order-list">
          <span>1</span>
        </div>
        <div className="order-text">
          <p>배송 방법</p>
          <p>우편번호를 입력하세요</p>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default OrderMain;
