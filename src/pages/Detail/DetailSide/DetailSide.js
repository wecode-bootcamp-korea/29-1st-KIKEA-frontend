import React from 'react';
import DetailColor from './DetailColor';
import DetailSize from './DetailSize';
import './DetailSide.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const DetailSide = ({ toggleAddBtn, productBox }) => {
  return (
    <div className="side-container">
      <div className="side-product-box">
        <div className="side-product-wrap">
          <div className="side-product-container">
            <h1 className="side-product-name">{productBox.result?.[0].name}</h1>
            <div className="side-product-price-wrap">
              <span className="side-product-price-unit">₩</span>
              <span className="side-product-price">
                {productBox.result?.[0].price.toLocaleString()}
              </span>
            </div>
          </div>
          <p className="side-product-type">{productBox.result?.[0].type}</p>
          <div className="side-product-review-wrap">
            <div className="side-product-review">★★★★</div>
            <span className="side-product-review-value">(8)</span>
          </div>
        </div>
        <div className="side-product-color-list-wrap">
          {(productBox.result?.[0].color_id === null && '') || (
            <DetailColor productBox={productBox} />
          )}
        </div>
        <div className="side-product-size-list-wrap">
          {(productBox.result?.[0].size === null && '') || (
            <DetailSize productBox={productBox} />
          )}
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
