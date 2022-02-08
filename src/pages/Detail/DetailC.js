import React, { useState, useEffect, useRef } from 'react';
import DetailNav from './DetailNav';
import DetailMain from './DetailMain/DetailMain';
import DetailSide from './DetailSide/DetailSide';
import DetailAside from './DetailAside/DetailAside';
import DetailDescSide from './DetailDescSide/DetailDescSide';
import './DetailC.scss';

const Detail = () => {
  const [productBox, setProductBox] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [descSideOpen, setDescSideOpen] = useState(false);

  const toggleCartBtn = () => {
    setIsOpen(prev => !prev); // function update
  };

  const toggleDescBtn = () => {
    setDescSideOpen(prev => !prev);
  };

  const toggleSideBar = () => {
    if (isOpen) return toggleCartBtn();

    if (descSideOpen) return toggleDescBtn();
  };

  useEffect(() => {
    fetch('/data/detailMainData.json')
      .then(res => res.json())
      .then(data => {
        setProductBox(data);
      });
  }, []);

  return (
    <main className="detail-page-container">
      <div className="detail-page">
        <DetailNav />
        <div className="detail-container">
          <div
            className={`empty-ele ${isOpen || descSideOpen ? '' : 'close'}`}
            onClick={toggleSideBar}
          />
          <DetailMain productBox={productBox} toggleDescBtn={toggleDescBtn} />
          <DetailSide
            isOpen={isOpen}
            toggleAddBtn={toggleCartBtn}
            productBox={productBox}
          />
          {isOpen && (
            <DetailAside isOpen={isOpen} toggleCloseBtn={toggleCartBtn} />
          )}
          <DetailDescSide descSideOpen={descSideOpen} />
        </div>
      </div>
    </main>
  );
};

export default Detail;
