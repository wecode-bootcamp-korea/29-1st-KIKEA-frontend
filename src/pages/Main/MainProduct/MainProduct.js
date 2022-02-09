import React, { useEffect, useState } from 'react';
import { END_POINT } from '../../../config';
import './MainProduct.scss';
import ProductFilter from './ProductFilter/ProductFilter';
import ProductItem from './ProductItem/ProductItem';

const MainProduct = () => {
  const [category, setCategory] = useState('');
  const [item, setItem] = useState('');

  const sortCategory = name => {
    fetch(END_POINT.selectCategory + name)
      .then(response => response.json())
      .then(result => {
        setItem(result);
      });
  };
  useEffect(() => {
    fetch(END_POINT.category)
      .then(response => response.json())
      .then(result => {
        setCategory(result.categories);
      });

    fetch(END_POINT.allItem)
      .then(response => response.json())
      .then(result => {
        setItem(result);
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
