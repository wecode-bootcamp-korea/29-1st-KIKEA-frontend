import React, { useState, useEffect } from 'react';
import './Cart.scss';
import CartMain from './CartMain/CartMain';
import CartSide from './CartSide/CartSide';
import CartRecBox from './CartMain/CartRecProd/CartRecBox';

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
      <div
        className="cart-main-wrap
      "
      >
        <CartMain
          cartBox={cartBox}
          setCartBox={setCartBox}
          onRemove={onRemove}
        />
        <CartSide cartBox={cartBox} />
      </div>
      <CartRecBox cartBox={cartBox} setCartBox={setCartBox} />
    </div>
  );
};

export default Cart;
