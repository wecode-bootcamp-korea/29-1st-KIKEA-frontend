import React from 'react';
import './MainProduct.scss';
import ProductFilter from './ProductFilter/ProductFilter';
import ProductItem from './ProductItem/ProductItem';

const MainProduct = () => {
  return (
    <div className="mainproduct-wrapper">
      <h2 className="main-wrapper-homefurnishing">홈 퍼니싱 상품</h2>
      <ProductFilter />
      <ProductItem />
    </div>
  );
};

export default MainProduct;
