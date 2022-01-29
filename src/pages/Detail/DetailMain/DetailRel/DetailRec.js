import React from 'react';
import DetailRecProd from './DetailRecProd';
import './DetailRec.scss';

const DetailRec = ({ productBox }) => {
  return (
    <div className="rec-wrap">
      <div className="rec-container">
        <h2 className="rec-products">추천 제품</h2>
        <div className="rec-products-list-wrap">
          <div className="rec-products-list">
            {productBox.map(product => {
              return (
                <DetailRecProd
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  type={product.type}
                  unit={product.unit}
                  price={product.price}
                  review={product.review}
                  mainSrc={product.mainSrc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRec;
