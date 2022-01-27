import React from 'react';
import './Main.scss';
import Promotion from './Promotion/Promotion';
import MainProduct from './MainProduct/MainProduct';
import RecommendItem from './RecommentItem/RecommendItem';

const Main = () => {
  return (
    <>
      <nav />
      <main className="main-wrapper">
        <Promotion />
        <RecommendItem />
        <MainProduct />

      </main>
    </>
  );
};

export default Main;
