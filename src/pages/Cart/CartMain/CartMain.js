import React from 'react';
import CartBox from './CartBox/CartBox';
import './CartMain.scss';

const CartMain = ({ cartBox, setCartBox, onRemove }) => {
  const handleAdd = itemId => {
    const addQty = cartBox.map(item => {
      if (itemId === item.id && item.quantity < 5) {
        return { ...item, quantity: item.quantity + 1 };
      } else return item;
    });
    setCartBox(addQty);
  };

  const handleMinus = itemId => {
    const minusQty = cartBox.map(item => {
      if (itemId === item.id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      } else return item;
    });
    setCartBox(minusQty);
  };

  return (
    <div className="cart-main-container">
      <div className="cart-box-top">
        <h1 className="cart-comment">장바구니</h1>
        <span className="cart-etc">...</span>
      </div>
      {cartBox?.map(({ id, name, type, unit, price, quantity }) => {
        return (
          <CartBox
            key={id}
            id={id}
            name={name}
            type={type}
            unit={unit}
            price={price}
            quantity={quantity}
            onRemove={onRemove}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
          />
        );
      })}
    </div>
  );
};

export default CartMain;
