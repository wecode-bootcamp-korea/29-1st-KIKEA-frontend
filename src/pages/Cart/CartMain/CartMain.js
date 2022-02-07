import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import CartBox from './CartBox/CartBox';
import CartRecProd from './CartRecProd/CartRecProd';
import './CartMain.scss';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const TOTAL_SLIDES = 2;

const CartMain = ({ cartBox, setCartBox, onRemove }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 35}%)`;
  }, [currentSlide]);

  // 제품 수량 +, - 에 따른 가격 업데이트
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
        <span className="cart-etc">-</span>
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
      <div className="cart-rec-container">
        <div className="cart-rec-wrap">
          <h2 className="cart-rec-products">추천 제품</h2>
          <div className="cart-top">
            <button className="cart-slide-prev-icon" onClick={prevSlide}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="cart-prev-icon"
              />
            </button>
            <button className="cart-slide-next-icon" onClick={nextSlide}>
              <FontAwesomeIcon
                icon={faChevronRight}
                className="cart-next-icon"
              />
            </button>
            <div className="cart-rec-products-list-wrap">
              <div className="cart-rec-products-list" ref={slideRef}>
                {cartBox?.map(
                  ({ id, name, type, unit, price, review, mainSrc }) => {
                    return (
                      <CartRecProd
                        key={id}
                        id={id}
                        name={name}
                        type={type}
                        unit={unit}
                        price={price}
                        review={review}
                        mainSrc={mainSrc}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
