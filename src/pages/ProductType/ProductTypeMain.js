import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ProductCategory from './ProductCategory/ProductCategory';
import ProductSuggestion from './ProductSuggestion/ProductSuggestion';
import ProductFilter from './ProductFilter/ProductFilter';
import ProductTips from './ProductTips/ProductTips';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer/Footer';
import './ProductTypeMain.scss';

const ProductTypeMain = () => {
  const [productData, setProductData] = useState('');
  const [items, setItems] = useState('');
  const location = useLocation();

  console.log(location.search);
  useEffect(() => {
    fetch(
      `http://192.168.147.117:8000/products/type?subcategory=${location.search}`
    )
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
    fetch('http://192.168.147.117:8000/products/product?')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <ProductCategory productData={productData} />
      <ProductSuggestion />
      <ProductTips />
      <ProductFilter items={items} />
      <Footer />
    </>
  );
};

export default ProductTypeMain;
