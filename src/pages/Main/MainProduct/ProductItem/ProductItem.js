import React from 'react';
import './ProductItem.scss';

const ProductItem = () => {
  return (
    <div className="productitem">
      <div className="productitem-item-wrapper">
        {PRODUCTS.map(({ description, img, id }) => (
          <div className="productitem-item-flex" key={id}>
            <img
              alt={description}
              src={img}
              className="productitem-item-flex-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PRODUCTS = [
  {
    id: 1,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    productName: '고라니',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/file-1635809674741-1d3a90cc064aimage',
  },
  {
    id: 4,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 7,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 8,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1618221710640-c0eaaa2adb49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 9,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1616627434852-097e535878d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 10,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 11,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1618377384716-462f06a61706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 12,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1616464916265-68fc457bdc70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 13,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 14,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 15,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1575501265016-ae78c708a09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 16,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 17,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 18,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
];
export default ProductItem;
