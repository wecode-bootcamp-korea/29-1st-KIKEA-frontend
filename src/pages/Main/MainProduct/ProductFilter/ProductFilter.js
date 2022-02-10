import React from 'react';
import './ProductFilter.scss';

const ProductFilter = ({ category, sortCategory, color }) => {
  return (
    <div className="productfilter">
      <div className="productfilter-carousel">
        {category &&
          category.map(({ id, name }) => (
            <button
              key={id}
              className={
                color ? 'productfilter-button color ' : 'productfilter-button '
              }
              onClick={() => sortCategory(id)}
            >
              {name}
            </button>
          ))}
      </div>
    </div>
  );
};
export default ProductFilter;
