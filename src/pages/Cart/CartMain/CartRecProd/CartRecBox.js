import React, { useState, useEffect, useRef } from 'react';
import CartRecProd from './CartRecProd';
import './CartRecBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const TOTAL_SLIDES = 3;

const CartRecBox = ({ secondCartBox }) => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="cart-rec-container">
      <div className="cart-rec-wrap">
        <h2 className="cart-rec-products">추천 제품</h2>
        <div className="cart-top">
          <button className="cart-slide-prev-icon" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} className="cart-prev-icon" />
          </button>
          <button className="cart-slide-next-icon" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} className="cart-next-icon" />
          </button>
          <div className="cart-rec-products-list-wrap">
            <div className="cart-rec-products-list" ref={slideRef}>
              {secondCartBox.result?.map((item, index) => (
                <CartRecProd
                  key={index}
                  id={item.id}
                  name={item.name}
                  type={item.type}
                  price={item.price}
                  image={item.default_image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRecBox;
