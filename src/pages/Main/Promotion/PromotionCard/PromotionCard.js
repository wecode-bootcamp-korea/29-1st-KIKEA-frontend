import React from 'react';
import './PromotionCard.scss';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PromotionCard = ({ title, img, description }) => {
  return (
    <div className="promotioncard">
      <div className="promotioncard-img-box">
        <img alt={description} src={img} className="promotioncard-img" />
      </div>

      <div className="promotioncard-description">
        <p>{title}</p>
        <p>{description}</p>
        <div className="arrow-wrapper">
          <span className="arrow-span">
            <button className="arrwo-button">
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
