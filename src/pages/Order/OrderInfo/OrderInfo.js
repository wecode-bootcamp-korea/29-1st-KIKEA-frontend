import React, { useEffect, useState } from 'react';
import './OrderInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faHeart, faLock } from '@fortawesome/free-solid-svg-icons';

const OrderInfo = () => {
  useEffect(() => {
    const fetch = fetchdata();
    fetch.then(res => res.json()).then(data => setItem(data));
  }, []);
  const [item, setItem] = useState('');

  const fetchdata = async () => {
    const response = await fetch('http://172.20.10.9:8000/orders/carts', {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    });
    return response;
  };

  const checkout = () => {
    fetch('http://172.20.10.9:8000/orders', {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
      body: JSON.stringify({ quantity: 1 }),
    })
      .then(res => res.json())
      .then(data => console.log);
  };

  const price =
    (item && item.result.map(e => e.price).reduce((a, b) => a + b)) || 90000;
  //item?.result.map(e => e.price).reduce((a, b) => a + b) || 90000;
  const additionalTax = price / 10;
  const totalPrice = price + additionalTax;
  return (
    <div className="orderinfo">
      <div className="order-data">
        <div className="order-data-top">
          <h1>주문정보</h1>
          <span>수정</span>
        </div>
        <div className="order-image-container">
          {item.result &&
            item.result.map(image => (
              <div className="order-image-box" key={image.product_option_id}>
                <img alt="img" src={image.default_image} />
              </div>
            ))}
        </div>
        <div className="order-price-box">
          <h2>주문 내역</h2>
          <p>
            <span className="order-price-detail">
              <span> 주문 금액</span>
            </span>
            <span className="order-price-detail">
              <span> 주문 금액</span>
              <span>{price}</span>
            </span>

            <span className="order-price-detail">
              <span> 부가세 (10%)</span>
              <span>{additionalTax}</span>
            </span>
          </p>
        </div>
        <hr />
        <div className="total-price-box">
          <span>총 주문 금액</span>
          <h3> {totalPrice} </h3>
        </div>
        <div className="order-etc">
          <p>
            <FontAwesomeIcon className="truck-icon icon" icon={faHeart} />
            &nbsp; &nbsp;반품 정책 365일 이내에 제품 환불 가능
          </p>
          <p>
            <FontAwesomeIcon className="truck-icon icon" icon={faLock} />
            &nbsp; &nbsp;SSL 데이터 암호화로 안전한 쇼핑
          </p>
        </div>
      </div>
      <div className="order-checkout">
        <button className="checkout-button" onClick={checkout}>
          결제
        </button>
      </div>
    </div>
  );
};

export default OrderInfo;
