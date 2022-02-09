import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './DetailDesc.scss';

const DetailDesc = ({ toggleDescBtn }) => {
  return (
    <div className="main-desc-container">
      <div className="main-desc-wrap">
        <p className="main-desc">
          TÄLLBYN 텔뷘 시리즈의 조명은 메탈과 입으로 불어 만드는 유리 소재로
          <br />
          만들어서 클래식하면서도 튼튼한 디자인이에요. 멋진 분위기를 연출하는
          기능성 조명이죠.
          <br />
          집안에 추억을 떠올리게 하는 공간을 만들어보세요.
        </p>
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
