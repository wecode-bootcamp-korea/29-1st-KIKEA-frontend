import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import CartBox from './CartBox/CartBox';
import CartRecProd from './CartRecProd/CartRecProd';
import './CartMain.scss';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const CartMain = ({ cartBox, onRemove }) => {
  const TOTAL_SLIDES = 2;
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

  return (
    <div className="cart-main-container">
      <div className="cart-box-top">
        <h1 className="cart-comment">장바구니</h1>
        <span className="cart-etc">-</span>
      </div>
      {cartBox?.map((prod, index) => {
        return (
          <CartBox
            key={index}
            id={prod.id}
            name={prod.name}
            type={prod.type}
            unit={prod.unit}
            price={prod.price}
            onRemove={onRemove}
            prod={prod}
          />
        );
      })}
      <div className="rec-container">
        <div className="rec-wrap">
          <h2 className="rec-products">추천 제품</h2>
          <div className="top">
            <button className="slide-prev-icon" onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} className="prev-icon" />
            </button>
            <button className="slide-next-icon" onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} className="next-icon" />
            </button>
            <div className="rec-products-list-wrap">
              <div className="rec-products-list" ref={slideRef}>
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
