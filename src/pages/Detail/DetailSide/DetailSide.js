import React, { useState } from 'react';
import './DetailSide.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const DetailSide = ({ toggleAddBtn, productBox }) => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="side-container">
      <div className="side-product-box">
        <div className="side-product-container">
          <h1 className="side-product-name">TÄLLBYN 텔뷘</h1>
          <div className="side-product-price-wrap">
            <span className="side-product-price-unit">₩</span>
            <span className="side-product-price">59,900</span>
          </div>
        </div>
        <p className="side-product-type">
          탁상스탠드, 니켈 도금/오팔 화이트 유리, 40cm
        </p>
        <div className="side-product-review">★★★★</div>
        <span className="side-product-review-value">(8)</span>
        <div className="side-product-color-value-container">
          <div className="side-product-color-value-comment">제품 색상</div>
          <p className="side-product-color-value">{selectedColor}</p>
        </div>
        <div className="side-product-color-list-wrap">
          {productBox[0]?.color.map(({ id, colorValue, mainSrc }, index) => {
            return (
              <div
                key={index}
                className="side-product-color-box"
                onMouseOver={() => setSelectedColor(colorValue)}
              >
                <img
                  key={colorValue}
                  id={id}
                  src={mainSrc}
                  alt="side-product-color-img"
                  className="side-product-color-img"
                />
              </div>
            );
          })}
        </div>
        <div className="btn-wrap">
          <button className="buying-btn" onClick={toggleAddBtn}>
            구매하기
          </button>
          <button className="click-heart">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <div className="delivery-wrap">
          <div className="delivery">배송 가능</div>
          <div className="delivery-comment">
            배송 옵션은 결제 단계에서 확인 가능합니다
          </div>
        </div>
        <hr />
        <div className="rec-wrap">
          <div className="rec">고양점 에 재고가 있습니다</div>
          <div className="rec-comment">다른 매장 재고 및 재입고 날짜 확인</div>
        </div>
      </div>
    </div>
  );
};

export default DetailSide;
