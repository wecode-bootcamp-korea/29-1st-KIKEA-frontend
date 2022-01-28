import React from 'react';
import './ProductFilter.scss';

const ProductFilter = () => {
  return (
    <>
      <div className="filter-section-container">
        <div className="filter-btn-container">
          <div className="filter-btn">d</div>
          <div className="filter-btn-category">d</div>
        </div>

        {FILTERDATA.map(kikea => (
          <div
            className="product-card-container"
            key={kikea.id}
            // onMouseover={}
          >
            <div className="item-select-btn">
              <input type="checkbox" className="checkbox-btn"></input>
            </div>
            <img className="card-img" src={kikea.img} alt="product" />
            <p className="product-name">{kikea.name}</p>
            <p className="product-type">{kikea.type}</p>
            <div className="price-review-container">
              <div className="price-review-wrapper">
                <p className="won-symbol">₩</p>
                <span className="product-price">{kikea.price}</span>
              </div>
              <div>
                <button className="add-cart-btn">addCart</button>
              </div>
            </div>
            <div className="rating-container">
              <span className="rating">{kikea.rating}</span>
              <span className="review-nums">{kikea.reviewNums}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductFilter;

const FILTERDATA = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: 'FRIHETEN 프리헤텐',
    type: '수납코너소파베드',
    price: '777,777',
    rating: '4.5',
    reviewNums: '21',
  },
  // {
  //   id: 2,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
  // {
  //   id: 3,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
  // {
  //   id: 4,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
  // {
  //   id: 5,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
  // {
  //   id: 6,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
  // {
  //   id: 7,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
  // {
  //   id: 8,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
  // {
  //   id: 9,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
  // {
  //   id: 10,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
  // {
  //   id: 11,
  //   img: 'https://images.pexels.com/photos/7394787/pexels-photo-7394787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //   name: 'FRIHETEN 프리헤텐',
  //   type: '수납코너소파베드',
  //   price: '777,777',
  //   rating: '4.5',
  //   reviewNums: '21',
  // },
];
