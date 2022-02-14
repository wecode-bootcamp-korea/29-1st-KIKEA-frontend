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

  const filterItems = () => {
    // fetch(`http://192.168.147.112:8000/products?sort=${name}`)
    fetch('http://10.58.7.174:8000/products?sort=price')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  };

  useEffect(() => {
    fetch(`http://10.58.7.174:8000/products/type${location.search}`)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
    fetch('http://10.58.7.174:8000/products/product?type=6')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, [setItems, setProductData, location]);

  return (
    <>
      <Nav />
      <ProductCategory productData={productData} />
      <ProductSuggestion />
      <ProductTips />
      <ProductFilter items={items} filterItems={filterItems} />
      <Footer />
    </>
  );
};

export default ProductTypeMain;
