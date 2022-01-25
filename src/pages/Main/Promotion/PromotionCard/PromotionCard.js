import React from 'react';
import './PromotionCard.scss';

const PromotionCard = ({ title, img, description }) => {
  return (
    <div className="promotioncard-wrapper">
      <img alt={description} src={img} className="promotioncard-img" />
      <div className="promotioncard-description">
        <p>{title}</p>
        <p>{description}</p>
        <div className="arrow-wrapper">
          <span className="arrow-span">
            <button className="arrwo-button">-></button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
