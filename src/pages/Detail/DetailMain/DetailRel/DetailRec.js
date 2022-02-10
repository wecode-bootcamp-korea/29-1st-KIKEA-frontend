import React, { useState, useRef, useEffect } from 'react';
import DetailRecProd from './DetailRecProd';
import './DetailRec.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const DetailRec = ({ secondProductBox }) => {
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
    <div className="rec-wrap">
      <div className="rec-container">
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
              {secondProductBox.result?.map((item, index) => (
                <DetailRecProd
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

export default DetailRec;
