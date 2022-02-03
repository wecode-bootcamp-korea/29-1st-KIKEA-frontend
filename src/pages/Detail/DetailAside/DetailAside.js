import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './DetailAside.scss';

const DetailAside = ({ isOpen, toggleCloseBtn }) => {
  return (
    <aside className={isOpen ? 'add-item-slide-in' : 'add-item-slide-out'}>
      <div className="aside-top">
        <button className="close-btn" onClick={toggleCloseBtn}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <p className="add-item-comment">
          TÄLLBYN 텔뷘 제품이 장바구니에
          <br />
          추가되었습니다.
        </p>
        <button className="go-bag">장바구니로 가기</button>
      </div>
      <div className="related-products-wrap">
        <p className="related-products">관련 제품</p>
        <ul className="related-products-list">
          <li className="related-products-item">
            <img />
            <div className="related-products-item-contents">
              <p className="related-products-item-name">RYET 뤼에트</p>
              <span className="related-products-item-info">
                LED 전구 E14 250 루멘, 2개
              </span>
              <span className="related-products-item-unit">₩</span>
              <span className="related-products-item-price">6,900</span>
            </div>
          </li>
          <li className="related-products-item">
            <img />
            <div className="related-products-item-contents">
              <p className="related-products-item-name">TRÅDFRI 트로드프리</p>
              <span className="related-products-item-info">리모컨</span>
              <span className="related-products-item-unit">₩</span>
              <span className="related-products-item-price">16,900</span>
            </div>
          </li>
          <li className="related-products-item">
            <img />
            <div className="related-products-item-contents">
              <p className="related-products-item-name">DEJSA 데이사</p>
              <span className="related-products-item-info">
                탁상스탠드, 28 cm
              </span>
              <span className="related-products-item-unit">₩</span>
              <span className="related-products-item-price">49,900</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DetailAside;
