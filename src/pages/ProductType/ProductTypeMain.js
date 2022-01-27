import React from 'react';
import ProductCategory from './ProductCategory/ProductCategory';
import ProductSuggestion from './ProductSuggestion/ProductSuggestion';
import ProductFilter from './ProductFilter/ProductFilter';

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
