import React, { useEffect, useState } from 'react';
import './MainProduct.scss';
import ProductFilter from './ProductFilter/ProductFilter';
import ProductItem from './ProductItem/ProductItem';

const MainProduct = () => {
  const [category, setCategory] = useState('');
  const [item, setItem] = useState('');

  const sortCategory = name => {
    console.log('name');
    console.log(name);
    fetch(`http://10.58.5.10:8000/products?category=${name}`)
      .then(response => response.json())
      .then(result => {
        setItem(result);
      });
  };
  console.log('item');
  console.log(item);
  useEffect(() => {
    fetch('http://10.58.5.10:8000/products/category')
      .then(response => response.json())
      .then(result => {
        setCategory(result.categories);
      });

    fetch('http://10.58.5.10:8000/products')
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
