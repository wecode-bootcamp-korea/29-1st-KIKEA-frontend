import React, { useEffect, useState } from 'react';
import { END_POINT } from '../../../config';
import './MainProduct.scss';
import ProductFilter from './ProductFilter/ProductFilter';
import ProductItem from './ProductItem/ProductItem';

const MainProduct = () => {
  const [category, setCategory] = useState('');
  const [item, setItem] = useState('');

  // 중복
  // 유지보수하기 힘들어서
  // 수정할 포인트가 많아져서
  //
  const sortCategory = name => {
    fetch(END_POINT.product + name) // config
      .then(response => response.json())
      .then(result => {
        setItem(result);
      });
  };

  useEffect(() => {
    fetch('http://192.168.0.69:8000/products/category')
      .then(response => response.json())
      .then(result => {
        setItem(result.categories);
        setCategory(result);
      });
  }, []);

  return (
    <div className="mainproduct">
      <h2 className="main-wrapper-homefurnishing">홈 퍼니싱 상품</h2>
      <ProductFilter category={category} sortCategory={sortCategory} />
      <ProductItem item={item} />
    </div>
  );
};

export default MainProduct;
