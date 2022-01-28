import React from 'react';
import './ProductCategory.scss';

const ProductCategory = () => {
  return (
    <>
      <div className="product-category-container">
        <div clasName="category-path">
          <p>제품>가구>소파</p>
          {/* <ul className="category-path-list">
            <li className="category-path-items-text">제품</li>
            <li className="category-path-items">></li>
            <li className="category-path-items-text">가구</li>
            <li className="category-path-items">></li>
            <li className="category-path-items-text">소파</li>
          </ul> */}
        </div>
        <h1 className="category-title">소파</h1>
        <div className="product-category-wrapper">
          {CATEGORYDATA.map(kikea => (
            <div className="product-category" key={kikea.id}>
              <img
                className="product-category-img"
                src={kikea.img}
                alt={kikea.description}
              />
              <span className="product-category-name">
                {kikea.categoryName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const CATEGORYDATA = [
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 2,
    categoryName: '패브릭소파',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 3,
    categoryName: '모듈식소파',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 4,
    categoryName: '풋스툴/발받침대',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 5,
    categoryName: '소파커버',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 6,
    categoryName: '천연/인조가죽 소파',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 7,
    categoryName: '긴의자/카우치',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 8,
    categoryName: '소파악세서리/부속품',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 9,
    categoryName: '야외용 소파',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
  {
    id: 1,
    categoryName: '소파베드',
    img: 'https://images.pexels.com/photos/8987435/pexels-photo-8987435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'sofa',
  },
];
export default ProductCategory;
