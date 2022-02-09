import React from 'react';
import './ProductFilter.scss';

import ProductCard from './ProductCard/ProductCard';

const ProductFilter = ({ productData }) => {
  return (
    <>
      <div className="filter-section-container">
        <div className="filter-btn-container">
          <button type="button" className="filter-btn">
            비교
          </button>
          <button type="button" className="filter-btn">
            정렬
          </button>
          <button type="button" className="filter-btn">
            시트수
          </button>
          <button type="button" className="filter-btn">
            카테고리
          </button>
          <button type="button" className="filter-btn">
            가격
          </button>
          <button type="button" className="filter-btn">
            사이즈
          </button>
          <button type="button" className="filter-btn">
            색상
          </button>
          <button type="button" className="filter-btn">
            소재
          </button>
        </div>
        <div className="filter-btn-category" />
      </div>
      <div className="product-card-wrapper">
        {productData.categories?.map(kikea => {
          return <ProductCard key={kikea.id} kikea={kikea} />;
        })}
      </div>
    </>
  );
};

export default ProductFilter;
