import React from 'react';
import './Main.scss';
import Promotion from './Promotion/Promotion';
import MainProduct from './MainProduct/MainProduct';
import RecommendItem from './RecommentItem/RecommendItem';
import Footer from '../../components/Footer/Footer';

const Main = () => {
  return (
    <>
      <nav />
      <main className="main">
        <Promotion />
        <RecommendItem />
        <MainProduct />
      </main>
      <Footer />
    </>
  );
};

const MAINMENU = [
  { id: 1, name: '모든 공간' },
  { id: 2, name: '가구' },
  { id: 3, name: '조명' },
  { id: 4, name: '기타' },
];

export default Main;
