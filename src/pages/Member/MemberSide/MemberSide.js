import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MemberSide.scss';

const MemberSide = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/login');
  };
  return (
    <div className="memberside">
      <div className="memberside-title">
        <div className="logo-img-container">
          <img alt="kikea logo" src="/images/logo.jpg" className="logo-img" />
        </div>
        <p className="memberside-title-text1">
          <span>IKEA Family </span>
          <span>회원 가입</span>
        </p>
        <p className="memberside-title-text2">
          이미 가입하셨나요? <span onClick={goLogin}>로그인 하기</span>
        </p>
        <div className="memberside-img-container">
          <div className="memberside-img-box1">
            {IMGDATA1.map(img => (
              <div className="memberside-img" key={img.id} />
            ))}
          </div>
          <div className="memberside-img-box2">
            {IMGDATA2.map(img => (
              <div className="memberside-img" key={img.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const IMGDATA1 = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    alt: '가족',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1506836467174-27f1042aa48c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    alt: '가족',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    alt: '가족',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1521287329847-ec334c5517fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    alt: '가족',
  },
];

const IMGDATA2 = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8eWVsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    alt: '가족',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1640622304964-3e2c2c0cd7cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    alt: '가족',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1508808787069-421e7986016e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHllbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    alt: '가족',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    alt: '가족',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1640622304964-3e2c2c0cd7cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    alt: '가족',
  },
];

export default MemberSide;
