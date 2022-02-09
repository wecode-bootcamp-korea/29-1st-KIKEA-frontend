import React from 'react';
import ProductImg from './ProductImg';
import DetailDesc from './DetailDesc';
import DetailRec from './DetailRel/DetailRec';
import './DetailMain.scss';

const DetailMain = ({ productBox, toggleDescBtn }) => {
  return (
    <div className="detailMain">
      <div className="productImg-container">
        {productBox[0]?.img.map(({ id, src }) => {
          return <ProductImg key={id} id={id} img={src} />;
        })}
      </div>
      <DetailDesc toggleDescBtn={toggleDescBtn} />
      <DetailRec productBox={productBox} />
    </div>
  );
};

export default DetailMain;
