import React from 'react';
import TIPSDATA from '../Mock/TipsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import './ProductTips.scss';

const ProductTips = () => {
  return (
    <div className="product-tips-container">
      <div className="tips-description">
        <div>
          <h2 className="tips-title">
            내게 가장 잘 맞는 침대를 찾는 팁이 궁금하신가요?
          </h2>
        </div>
      </div>
      <div className="tips-img-container">
        {TIPSDATA.map(KIKEA => (
          <div className="tips-img-wrapper" key={KIKEA.id}>
            <img className="tips-img" src={KIKEA.img} alt={KIKEA.alt} />
          </div>
        ))}
        <div className="tips-router">
          <span className="tips-text">
            침대 프레임과 침대에 대해 더 알아보기
          </span>
          <button type="button" className="signup-btn ">
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              className="signup-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTips;
