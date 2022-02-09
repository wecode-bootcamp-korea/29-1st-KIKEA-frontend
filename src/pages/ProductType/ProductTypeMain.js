import React, { useEffect, useState } from 'react';
import ProductCategory from './ProductCategory/ProductCategory';
import ProductSuggestion from './ProductSuggestion/ProductSuggestion';
import ProductFilter from './ProductFilter/ProductFilter';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer/Footer';
import './ProductTypeMain.scss';

const ProductTypeMain = () => {
  const [productData, setProductData] = useState('');

  useEffect(() => {
    fetch('http://10.58.5.10:8000/products/category')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <ProductCategory productData={productData} />
      <ProductSuggestion />
      <ProductFilter productData={productData} />
      <Footer />
    </>
  );
};

export default ProductTypeMain;
