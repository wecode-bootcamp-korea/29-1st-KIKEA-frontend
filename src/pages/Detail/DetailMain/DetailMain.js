import React from 'react';
import ProductImg from './ProductImg';
import DetailDesc from './DetailDesc';
import DetailRec from './DetailRel/DetailRec';
import './DetailMain.scss';

const DetailMain = ({ productBox, secondProductBox, toggleDescBtn }) => {
  return (
    <div className="detailMain">
      <div className="productImg-container">
        {productBox.result?.[0].image.map((img, index) => (
          <ProductImg image={img} key={index} />
        ))}
      </div>
      <DetailDesc toggleDescBtn={toggleDescBtn} productBox={productBox} />
      <DetailRec secondProductBox={secondProductBox} />
    </div>
  );
};

export default DetailMain;
