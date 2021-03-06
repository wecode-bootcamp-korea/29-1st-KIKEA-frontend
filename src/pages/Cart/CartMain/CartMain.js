import React from 'react';
import CartBox from './CartBox/CartBox';
import './CartMain.scss';

const CartMain = ({ cartBox, setCartBox, onRemove, changeNum }) => {
  // const handleAdd = itemId => {
  //   const addQty = cartBox.result?.map(item => {
  //     if (itemId === item.id && item.quantity < 5) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     } else return item;
  //   });
  //   setCartBox(addQty);
  // };

  // const handleMinus = itemId => {
  //   const minusQty = cartBox.result?.map(item => {
  //     if (itemId === item.id && item.quantity > 1) {
  //       return { ...item, quantity: item.quantity - 1 };
  //     } else return item;
  //   });
  //   setCartBox(minusQty);
  // };

  // const handleqty = (itemId, operator, quantity) => {
  //   fetch(`http://10.58.7.174:8000/orders/carts/${itemId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       Authorization: sessionStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({ quantity: quantity + operator }),
  //   });
  //   console.log(quantity + operator);
  // };

  return (
    <div className="cart-main-container">
      <div className="cart-box-top">
        <h1 className="cart-comment">장바구니</h1>
        <span className="cart-etc">...</span>
      </div>
      {cartBox.result?.map(
        (
          {
            product_option_id,
            name,
            price,
            quantity,
            default_image,
            total_price,
            type,
          },
          index
        ) => {
          return (
            <CartBox
              key={index}
              id={product_option_id}
              name={name}
              price={price}
              quantity={quantity}
              default_image={default_image}
              total_price={total_price}
              type={type}
              onRemove={onRemove}
              changeNum={changeNum}
              cartBox={cartBox}
              // handleAdd={handleAdd}
              // handleMinus={handleMinus}
              // handleqty={handleqty}
            />
          );
        }
      )}
    </div>
  );
};

export default CartMain;
