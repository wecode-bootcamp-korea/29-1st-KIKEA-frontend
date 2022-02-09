import React from 'react';
import './ProductCategory.scss';

const ProductCategory = ({ productData }) => {
  return (
    <div className="product-category-container">
      <div clasName="category-path">
        <p className="category-path-items">제품 > 가구 > 소파</p>
      </div>
      <h1 className="category-title">침대</h1>
      <div className="product-category-wrapper">
        {productData.categories?.map(kikea => (
          <div className="product-category" key={kikea.id}>
            <img
              className="product-category-img"
              src={kikea.img}
              alt={kikea.description}
            />
            <p className="product-category-name">{kikea.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
