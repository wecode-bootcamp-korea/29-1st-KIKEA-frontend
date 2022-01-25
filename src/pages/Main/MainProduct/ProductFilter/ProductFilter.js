import React from 'react';
import './ProductFilter.scss';

const ProductFilter = () => {
  return (
    <div className="productFilter-wrapper">
      <div className="productFilter-carousel">
        {MENU2.map(category => (
          <button key={category.id} className="productFilter-button">
            <span>{category.name}</span>
          </button>
        ))}
        {MENU.map(category => (
          <button key={category.id} className="productFilter-button">
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const MENU2 = [
  { id: 1, name: '모든 공간' },
  { id: 2, name: '가구' },
  { id: 3, name: '조명' },
  { id: 4, name: '기타' },
];

const MENU = [
  { id: 1, name: '거실' },
  { id: 2, name: '주방' },
  { id: 3, name: '홈오피스' },
  { id: 4, name: '야외' },
  { id: 5, name: '욕실' },
  { id: 6, name: '유아와 어린이' },
  { id: 7, name: '다이닝' },
  { id: 8, name: '현관' },
  { id: 9, name: '소품' },
];
export default ProductFilter;
