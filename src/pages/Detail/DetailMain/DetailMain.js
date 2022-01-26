import React from 'react';
import ProductImg from './ProductImg';
import DetailDesc from './DetailDesc';
import './DetailMain.scss';

const DetailMain = ({ productBox }) => {
  return (
    <div className="detailMain">
      <div className="productImg-container">
        {productBox[0] &&
          productBox[0].img.map(product => {
            return (
              <ProductImg
                key={product.id}
                id={product.id}
                // name={product.name}
                img={product.src}
              />
            );
          })}
      </div>
      <DetailDesc />
    </div>
  );
};

export default DetailMain;
