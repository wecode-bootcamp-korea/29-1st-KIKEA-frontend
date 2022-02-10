import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchCard.scss';

const SearchCard = ({ kikea }) => {
  const { id, default_image, name, type } = kikea;

  const navigate = useNavigate();

  const goDetail = id => {
    navigate(`/datail?products?${id}`);
  };

  return (
    <div className="product-items" key={id} onClick={() => goDetail(id)}>
      <div className="product-img">
        <img src={default_image} alt="product" className="img" />
      </div>
      <div className="product-description">
        <p className="product-name">{name}</p>
        <p className="product-class">{type}</p>
      </div>
    </div>
  );
};

export default SearchCard;
