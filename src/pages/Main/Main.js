import React, { useEffect, useState } from 'react';
import './Main.scss';
import Promotion from './Promotion/Promotion';
import MainProduct from './MainProduct/MainProduct';
import RecommendItem from './RecommentItem/RecommendItem';

{
}
const Main = () => {
  const [category, setCategory] = useState('');
  useEffect(() => {}, []);
  return (
    <>
      <nav />
      <main className="main">
        <Promotion />
        <RecommendItem />
        <MainProduct />
      </main>
    </>
  );
};

export default Main;
