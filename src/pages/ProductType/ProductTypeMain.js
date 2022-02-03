import React, { useEffect } from 'react';
import ProductCategory from './ProductCategory/ProductCategory';
import ProductSuggestion from './ProductSuggestion/ProductSuggestion';
import ProductFilter from './ProductFilter/ProductFilter';
import './ProductTypeMain.scss';
const ProductTypeMain = () => {
  return (
    <>
      <ProductCategory />
      <ProductSuggestion />
      <ProductFilter />
    </>
  );
};

export default ProductTypeMain;
