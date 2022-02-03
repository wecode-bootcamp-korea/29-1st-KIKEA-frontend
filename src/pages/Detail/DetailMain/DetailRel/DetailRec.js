import React from 'react';
import DetailRecProd from './DetailRecProd';
import './DetailRec.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const DetailRec = ({ productBox }) => {
  return (
    <div className="rec-wrap">
      <div className="rec-container">
        <h2 className="rec-products">추천 제품</h2>
        <div className="rec-products-list-wrap">
          <div className="btn-wrap">
            <button className="slide-prev-icon">
              <FontAwesomeIcon
                icon={faChevronLeft}
                // PrevSlide={PrevSlide}
                className="prev-icon"
              />
            </button>
            <button className="slide-next-icon">
              <FontAwesomeIcon
                icon={faChevronRight}
                // NextSlide={NextSlide}
                className="next-icon"
              />
            </button>
          </div>
          <div className="rec-products-list">
            {productBox.map(
              ({ id, name, type, unit, price, review, mainSrc }) => {
                return (
                  <DetailRecProd
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
  );
};

export default DetailRec;
