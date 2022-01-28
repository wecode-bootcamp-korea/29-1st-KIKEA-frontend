import React from 'react';
import './ProductFilter.scss';

const ProductFilter = () => {
  return (
    <div className="productfilter">
      <div className="productfilter-carousel">
        {MAINMENU.map(({ id, name }) => (
          <button key={id} className="productfilter-button">
            <span>{name}</span>
          </button>
        ))}
        {SUBMENU.map(({ id, name }) => (
          <button key={id} className="productfilter-button">
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const MAINMENU = [
  { id: 1, name: '모든 공간' },
  { id: 2, name: '가구' },
  { id: 3, name: '조명' },
  { id: 4, name: '기타' },
];

const SUBMENU = [
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
