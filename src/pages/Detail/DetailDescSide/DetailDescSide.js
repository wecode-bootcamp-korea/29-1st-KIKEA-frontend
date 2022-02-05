import React from 'react';
import './DetailDescSide.scss';

const DetailDescSide = ({ descSideOpen }) => {
  return (
    <aside className={descSideOpen ? 'show-desc-side' : 'hide-desc-side'}>
      <div className="product-desc-side-wrap">
        <h1 className="product-desc">제품 설명</h1>
        <p className="product-desc-comment">
          부드러운 느낌의 불빛이 따뜻하고 포근한 분위기를 연출합니다. <br /> 이
          유리 전등갓은 숙련된 전문가가 입으로 불어서 만든 제품으로 독특한
          개성을 느낄 수 있어요.
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
