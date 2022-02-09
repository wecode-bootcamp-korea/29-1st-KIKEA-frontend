import React, { useState } from 'react';
import './Order.scss';
import OrderInfo from './OrderInfo/OrderInfo';
import OrderMain from './OrderMain/OrderMain';
import OrderTop from './OrderTop/OrderTop';

const Order = () => {
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    phone_number: '',
  });

  const changeInfo = e => {
    const { name, value } = e.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };
  return (
    <div className="order">
      <OrderTop />
      <div className="order-main">
        <OrderMain inputState={inputState} changeInfo={changeInfo} />
        <OrderInfo inputState={inputState} />
      </div>
    </div>
  );
};

export default Order;
