import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer/Footer';
import DetailMain from './DetailMain/DetailMain';
import DetailSide from './DetailSide/DetailSide';
import DetailAside from './DetailAside/DetailAside';
import DetailDescSide from './DetailDescSide/DetailDescSide';
import './DetailC.scss';

const Detail = () => {
  const [productBox, setProductBox] = useState([]);
  const [secondProductBox, setSecondProductBox] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [descSideOpen, setDescSideOpen] = useState(false);

  const toggleCartBtn = () => {
    setIsOpen(prev => !prev);
  };

  const toggleDescBtn = () => {
    setDescSideOpen(prev => !prev);
  };

  useEffect(() => {
    fetch('http://10.58.5.10:8000/products?product=15')
      .then(res => res.json())
      .then(data => {
        setProductBox(data);
      });

    fetch('http://10.58.5.10:8000/products?subcategory=1')
      .then(res => res.json())
      .then(data => {
        setSecondProductBox(data);
      });
  }, []);

  const toggleSideBar = () => {
    if (isOpen) return toggleCartBtn();
    if (descSideOpen) return toggleDescBtn();
  };

  return (
    <>
      <Nav />
      <main className="detail-page-container">
        <div className="detail-page">
          <div className="detail-container">
            <div
              className={`empty-ele ${isOpen || descSideOpen ? '' : 'close'}`}
              onClick={toggleSideBar}
            />
            <DetailMain
              productBox={productBox}
              secondProductBox={secondProductBox}
              toggleDescBtn={toggleDescBtn}
            />
            <DetailSide
              isOpen={isOpen}
              toggleAddBtn={toggleCartBtn}
              productBox={productBox}
            />
            {isOpen && (
              <DetailAside isOpen={isOpen} toggleCloseBtn={toggleCartBtn} />
            )}
            <DetailDescSide
              descSideOpen={descSideOpen}
              productBox={productBox}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Detail;
