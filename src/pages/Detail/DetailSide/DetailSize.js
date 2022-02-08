import React, { useState } from 'react';
import './DetailSize.scss';

const DetailSize = ({ productBox }) => {
  const [selected, setSelectedColor] = useState('');

  return (
    <>
      <div className="side-product-size-value-container">
        <div className="side-product-size-comment"> 규격 선택</div>
        <div className="side-product-size-wrap">
          <button className="side-product-size-first-btn">
            <div className="side-product-size-first-comment">150 X 200</div>
          </button>
          <button className="side-product-size-second-btn">
            <div className="side-product-size-second-comment">180 X 220</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailSize;
