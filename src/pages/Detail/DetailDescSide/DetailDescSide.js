import React from 'react';
import './DetailDescSide.scss';

const DetailDescSide = ({ descSideOpen, productBox }) => {
  return (
    <aside className={descSideOpen ? 'show-desc-side' : 'hide-desc-side'}>
      <div className="product-desc-side-wrap">
        <h1 className="product-desc">제품 설명</h1>
        <p className="product-desc-comment">
          {productBox.result?.[0].description}
        </p>
        <button className="product-desc-read-more">자세히 보기</button>
        <div className="product-desc-side-number-wrap">
          <span className="product-number-comment">제품 번호</span>
          <span className="product-number">504.376.69</span>
        </div>
      </div>
    </aside>
  );
};

export default DetailDescSide;
