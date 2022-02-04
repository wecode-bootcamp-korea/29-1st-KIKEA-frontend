import React from 'react';
import CartBox from './CartBox/CartBox';
import './CartMain.scss';

const CartMain = ({ cartBox }) => {
  return (
    <div className="cart-main-container">
      <div className="cart-box-top">
        <h1 className="cart-comment">장바구니</h1>
        <span className="cart-etc">-</span>
      </div>
      {cartBox &&
        cartBox.map(({ id, name, type, unit, price }) => {
          return (
            <CartBox
              key={id}
              id={id}
              name={name}
              type={type}
              unit={unit}
              price={price}
            />
          );
        })}
    </div>
  );
};

export default CartMain;
