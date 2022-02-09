import React, { useState, useEffect } from 'react';
import './Cart.scss';
import CartMain from './CartMain/CartMain';
import CartSide from './CartSide/CartSide';
import CartRecBox from './CartMain/CartRecProd/CartRecBox';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer/Footer';

const Cart = () => {
  const [cartBox, setCartBox] = useState([]);
  const [secondCartBox, setSecondCartBox] = useState([]);

  useEffect(() => {
    fetch('http://192.168.147.112:8000/orders/carts', {
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartBox(data);
      });

    fetch('http://192.168.147.112:8000/products?subcategory=1')
      .then(res => res.json())
      .then(data => {
        setSecondCartBox(data);
      });
  }, []);

  const onRemove = id => {
    setCartBox(cartBox.result?.filter(prod => prod.id !== id));
  };

  return (
    <>
      <Nav />
      <div className="cart">
        <div className="cart-main-wrap">
          <CartMain
            cartBox={cartBox}
            setCartBox={setCartBox}
            onRemove={onRemove}
          />
          <CartSide cartBox={cartBox} />
        </div>
        <CartRecBox
          secondCartBox={secondCartBox}
          setSecondProductBox={setSecondCartBox}
        />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
