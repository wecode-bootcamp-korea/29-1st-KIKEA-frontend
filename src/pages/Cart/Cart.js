import React, { useState, useEffect } from 'react';
import './Cart.scss';
import CartMain from './CartMain/CartMain';
import CartSide from './CartSide/CartSide';

const Cart = () => {
  const [cartBox, setCartBox] = useState([]);

  useEffect(() => {
    fetch('data/cartData.json')
      .then(res => res.json())
      .then(data => {
        setCartBox(data);
      });
  }, []);

  const onRemove = id => {
    setCartBox(cartBox.filter(prod => prod.id !== id));
  };

  return (
    <div className="cart">
      <CartMain cartBox={cartBox} setCartBox={setCartBox} onRemove={onRemove} />
      <CartSide cartBox={cartBox} />
    </div>
  );
};

export default Cart;
