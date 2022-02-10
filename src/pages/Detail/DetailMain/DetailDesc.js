import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DetailDesc.scss';

const DetailDesc = ({ toggleDescBtn, productBox }) => {
  return (
    <div className="main-desc-container">
      <div className="main-desc-wrap">
        <p className="main-desc">{productBox.result?.[0].description}</p>
        <span className="product-num-ko">제품 번호</span>
        <span className="product-num">504.376.69</span>
      </div>
      <div className="desc-box">
        <button className="product-desc-btn" onClick={toggleDescBtn}>
          <span className="product-desc-btn-comment">제품 설명</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button className="product-review-btn">
          <span className="product-review-btn-commnet">상품평</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default DetailDesc;
