import React from 'react';
import './ProductItem.scss';

const ProductItem = ({ item }) => {
  return (
    <div className="productitem">
      <div className="productitem-item-wrapper">
        {item.result &&
          item.result.map(({ image, id }) => (
            <div className="productitem-item-flex" key={id}>
              <img
                alt={id}
                src={
                  (image[0] && image[0]) ||
                  'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                }
                className="productitem-item-flex-img"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductItem;
