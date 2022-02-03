import React from 'react';
import './ProductFilter.scss';

const ProductFilter = ({ category, sortCategory }) => {
  return (
    <div className="productfilter">
      <div className="productfilter-carousel">
        {category.categories &&
          category.categories.map(({ id, name }) => (
            <button
              key={id}
              className="productfilter-button"
              onClick={() => sortCategory(name)}
            >
              <span>{name}</span>
            </button>
          ))}
      </div>
    </div>
  );
};
export default ProductFilter;
