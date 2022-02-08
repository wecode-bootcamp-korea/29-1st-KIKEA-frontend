import React, { createRef, useEffect } from 'react';
import './RecommendItem.scss';

const RecommendItem = () => {
  const myRef = createRef();

  const nextClick = () => {
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };
  //useEffect(() => setInterval(() => nextClick(), 3000), []);
  return (
    <div className="recommenditem">
      <div className="recommendtaion-title">추천 제품</div>
      <div className="recommendtaion-item-wrapper" ref={myRef}>
        {MOCKDATA.map(item => (
          <div className="recommendtaion-item-box" key={item.id}>
            <img
              alt={item.description}
              src={item.img[0]}
              className="recommendtaion-item-img"
              onMouseOver={e => (e.target.src = item.img[1])}
              onMouseOut={e => (e.target.src = item.img[0])}
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
    img: [
      'https://images.unsplash.com/photo-1539438050859-39219d86bde8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: 2,
    productName: '고라니',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: [
      'https://images.unsplash.com/photo-1601276174812-63280a55656e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: 3,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://media.istockphoto.com/photos/lake-in-the-shape-of-the-worlds-continents-in-the-middle-of-untouched-picture-id1342229191?b=1&k=20&m=1342229191&s=170667a&w=0&h=swcdZlnGAdTuLsuYgPgVmpEVmFmKpgrSCnqWsc5l6vI=',
    ],
  },
  {
    id: 4,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: [
      'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1542977466-bbacf83cb0b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGtvcmVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: 5,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: [
      'https://images.unsplash.com/photo-1552858725-2758b5fb1286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ybGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: 6,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: [
      'https://images.unsplash.com/flagged/photo-1575517111839-3a3843ee7f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://media.istockphoto.com/photos/solar-panel-cell-on-dramatic-sunset-sky-backgroundclean-alternative-picture-id1310384629?b=1&k=20&m=1310384629&s=170667a&w=0&h=9qeo39JbvBKsw1ulAmn6u9l3K9CqwGHrrSzuiWVw1s8=',
    ],
  },
  {
    id: 7,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: [
      'https://images.unsplash.com/photo-1564019472231-4586c552dc27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29yZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: 8,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1538670178144-b8db27bad945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a29yZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: 9,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: [
      'https://images.unsplash.com/photo-1542639130-c9fadbddcc6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1603852452515-2dc92bd9c6f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a29yZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    ],
  },
  {
    id: 10,
    productName: '의자',
    description: '설명이지',
    price: '1000',
    detail: '야호',
    img: [
      'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1526199119161-4be1e3368d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a29yZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    ],
  },
];

// const MOCKDATA = [
//   {
//     id: 1,
//     productName: '의자',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/photo-1539438050859-39219d86bde8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 2,
//     productName: '고라니',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/photo-1601276174812-63280a55656e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 3,
//     productName: '의자',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 4,
//     productName: '의자',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 5,
//     productName: '의자',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/photo-1552858725-2758b5fb1286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 6,
//     productName: '의자',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/flagged/photo-1575517111839-3a3843ee7f5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 7,
//     productName: '의자',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/photo-1564019472231-4586c552dc27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 8,
//     productName: '의자',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 9,
//     productName: '의자',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/photo-1542639130-c9fadbddcc6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
//   },
//   {
//     id: 10,
//     productName: '의자',
//     description: '설명이지',
//     price: '1000',
//     detail: '야호',
//     img: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
//   },
// ];

export default RecommendItem;
