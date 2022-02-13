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

  const sortPriceToHigh = () => {
    const priceToHigh = items.products?.sort((a, b) => a.price - b.price);
    setItems({ products: priceToHigh }); // items는 배열 형태 + products라는 key값이 있음 / priceToHigh는 객체 형태 + products라는 key값이 없음
  };

  const sortPriceToLow = () => {
    const priceToLow = items.products?.sort((a, b) => b.price - a.price);
    setItems({ products: priceToLow });
  };

  const sortStockToHigh = () => {
    const stockToHigh = items.products?.sort((a, b) => a.stock - b.stock);
    setItems({ products: stockToHigh });
  };

  const sortStockToLow = () => {
    const stockToLow = items.products?.sort((a, b) => b.stock - a.stock);
    setItems({ products: stockToLow });
  };

  const sortedByAddedDate = () => {
    const addedDate = items.products?.sort(
      (a, b) => b.created_at - a.created_at
    );
    setItems({ products: addedDate });
  };

  useEffect(() => {
    fetch(`http://10.58.7.174.112:8000/products/type${location.search}`)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
    fetch(
      'http://10.58.7.174:8000/products/product?subcategory=1&subcategory=2'
    )
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
      <ProductFilter items={items} sortPriceToHigh={sortPriceToHigh} />
      <Footer />
    </>
  );
};

export default ProductTypeMain;
