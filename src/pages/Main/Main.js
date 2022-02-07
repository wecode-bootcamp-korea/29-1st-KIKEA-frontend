import React from 'react';
import './Main.scss';
import Promotion from './Promotion/Promotion';
import MainProduct from './MainProduct/MainProduct';
import RecommendItem from './RecommentItem/RecommendItem';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav';

const Main = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <Promotion />
        <RecommendItem />
        <MainProduct />
      </main>
      <Footer />
    </>
  );
};

export default Main;
