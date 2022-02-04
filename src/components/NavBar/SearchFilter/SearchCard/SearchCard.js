import React from 'react';
import './SearchCard.scss';

const SearchCard = ({ kikea }) => {
  const { id, img, name, description } = kikea;
  return (
    <div className="product-items" key={id}>
      <div className="product-img">
        <img src={img} alt="product" className="img" />
      </div>
      <div className="product-description">
        <p className="product-name">{name}</p>
        <p className="product-class">{description}</p>
      </div>
    </div>
  );
};

export default SearchCard;
