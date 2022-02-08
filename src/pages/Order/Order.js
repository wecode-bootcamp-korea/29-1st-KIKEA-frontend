import React from 'react';
import './Order.scss';
import OrderInfo from './OrderInfo/OrderInfo';
import OrderMain from './OrderMain/OrderMain';
import OrderTop from './OrderTop/OrderTop';

const Order = () => {
  return (
    <div className="order">
      <OrderTop />
      <div className="order-main">
        <OrderMain />
        <OrderInfo />
      </div>
    </div>
  );
};

export default Order;
