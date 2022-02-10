import React, { useState } from 'react';
import './DetailColor.scss';

const DetailColor = ({ productBox }) => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <>
      <div className="side-product-color-value-container">
        <div className="side-product-color-value-comment">제품 색상</div>
        <p className="side-product-color-value">{selectedColor}</p>
      </div>
      <div className="side-product-color-list-wrap">
        {productBox.result?.map((item, index) => {
          return (
            <div
              key={index}
              className="side-product-color-box"
              onMouseOver={() => setSelectedColor(item.color)}
            >
              <img
                key={index}
                id={item.id}
                src={item.default_image}
                alt="side-product-color-img"
                className="side-product-color-img"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetailColor;
