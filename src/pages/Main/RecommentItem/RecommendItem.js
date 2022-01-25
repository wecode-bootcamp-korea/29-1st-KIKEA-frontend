import React from 'react';
import './RecommendItem.scss';

const RecommendItem = () => {
  return (
    <div className="recommendItem-wrapper">
      <div className="recommendtaion-title">추천 제품</div>
      <div className="recommendtaion-item-wrapper">
        {MOCKDATA.map(item => (
          <div className="recommendtaion-item-box" key={item.id}>
            <img
              alt={item.description}
              src={item.img}
              className="recommendtaion-item-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MOCKDATA = [
  {
    id: 1,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1539438050859-39219d86bde8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    productName: '고라니',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1601276174812-63280a55656e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
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
    img: 'https://images.unsplash.com/photo-1552858725-2758b5fb1286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/flagged/photo-1575517111839-3a3843ee7f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 7,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1564019472231-4586c552dc27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 8,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 9,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1542639130-c9fadbddcc6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 10,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
];

export default RecommendItem;
