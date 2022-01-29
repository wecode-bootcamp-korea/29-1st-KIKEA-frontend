import React, { useState, useEffect } from 'react';
import DetailNav from './DetailNav';
import DetailMain from './DetailMain/DetailMain';
import DetailSide from './DetailSide/DetailSide';
import DetailAside from './DetailAside/DetailAside';
import DetailDescSide from './DetailDescSide/DetailDescSide';

import './Detail.scss';

const Detail = () => {
  const [productBox, setProductBox] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [descSideOpen, setDescSideOpen] = useState(false);
  // const [isClose, setIsClose] = useState(false);

  const toggleAddBtn = () => {
    setIsOpen(!isOpen);
  };

  const toggleDescBtn = () => {
    setDescSideOpen(!descSideOpen);
  };

  const toggleCloseBtn = () => {
    setIsOpen(isOpen);
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
          <DetailMain
            productBox={productBox}
            toggleDescBtn={toggleDescBtn}
            toggleCloseBtn={toggleCloseBtn}
          />
          <DetailSide isOpen={isOpen} toggleAddBtn={toggleAddBtn} />
          <DetailAside isOpen={isOpen} />
          <DetailDescSide descSideOpen={descSideOpen} />
        </div>
      </div>
    </main>
  );
};

export default Detail;
