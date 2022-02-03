import React from 'react';
import './ProductFilter.scss';

import ProductCard from './ProductCard/ProductCard';

const ProductFilter = () => {
  return (
    <div className="filter-section-container">
      <div className="filter-btn-container">
        <button type="button" className="filter-btn">
          비교
        </button>
        <button type="button" className="filter-btn">
          정렬
        </button>
        <button type="button" className="filter-btn">
          시트수
        </button>
        <button type="button" className="filter-btn">
          카테고리
        </button>
        <button type="button" className="filter-btn">
          가격
        </button>
        <button type="button" className="filter-btn">
          사이즈
        </button>
        <button type="button" className="filter-btn">
          색상
        </button>
        <button type="button" className="filter-btn">
          소재
        </button>
      </div>
      <div className="filter-btn-category" />
      <div className="product-card-wrapper">
        {PRODUCTDATA.map(kikea => {
          return <ProductCard key={kikea.id} kikea={kikea} />;
        })}
      </div>
    </div>
  );
};

export default ProductFilter;

const PRODUCTDATA = [
  {
    id: 1,
    img: 'https://www.ikea.com/kr/ko/images/products/klippan-2-seat-sofa-vissle-grey__0820948_pe709146_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '2인용소파',
    price: '1234777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 2,
    img: 'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0944427_pe797252_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 3,
    img: 'https://www.ikea.com/kr/ko/images/products/glostad-2-seat-sofa-knisa-medium-blue__0950902_pe800742_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 4,
    img: 'https://www.ikea.com/kr/ko/images/products/linanaes-2-seat-sofa-vissle-beige__0972126_pe811548_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 5,
    img: 'https://www.ikea.com/kr/ko/images/products/klippan-2-seat-sofa-vissle-grey__0820948_pe709146_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '2인용소파',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 6,
    img: 'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0944427_pe797252_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 7,
    img: 'https://www.ikea.com/kr/ko/images/products/glostad-2-seat-sofa-knisa-medium-blue__0950902_pe800742_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 8,
    img: 'https://www.ikea.com/kr/ko/images/products/linanaes-2-seat-sofa-vissle-beige__0972126_pe811548_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 9,
    img: 'https://www.ikea.com/kr/ko/images/products/klippan-2-seat-sofa-vissle-grey__0820948_pe709146_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '2인용소파',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 10,
    img: 'https://www.ikea.com/kr/ko/images/products/angersby-2-seat-sofa-knisa-light-grey__0944427_pe797252_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 11,
    img: 'https://www.ikea.com/kr/ko/images/products/glostad-2-seat-sofa-knisa-medium-blue__0950902_pe800742_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
  {
    id: 12,
    img: 'https://www.ikea.com/kr/ko/images/products/linanaes-2-seat-sofa-vissle-beige__0972126_pe811548_s5.jpg?f=xxs',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777777',
    rating: '4.5',
    reviewNums: '21',
  },
];
