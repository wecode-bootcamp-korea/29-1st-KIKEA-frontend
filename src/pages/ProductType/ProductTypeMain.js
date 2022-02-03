import React, { useEffect, useState } from 'react';
import ProductCategory from './ProductCategory/ProductCategory';
import ProductSuggestion from './ProductSuggestion/ProductSuggestion';
import ProductFilter from './ProductFilter/ProductFilter';
import Nav from '../../components/Nav';
import './ProductTypeMain.scss';
const ProductTypeMain = () => {
  const [productData, setProductData] = useState('');

  useEffect(() => {
    fetch('http://192.168.0.69:8000/products/category')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);
  console.log(productData.categories);
  return (
    <>
      <Nav />
      <ProductCategory productData={productData} />
      <ProductSuggestion />
      <ProductFilter productData={productData} />
    </>
  );
};

export default ProductTypeMain;
