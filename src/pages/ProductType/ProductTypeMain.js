import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://10.58.5.10:8000/products/type?subcategory=${id}`)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
    fetch('http://10.58.5.10:8000/products/product')
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
