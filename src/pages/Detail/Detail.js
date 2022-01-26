import React, { useState, useEffect } from 'react';
import DetailMain from './DetailMain/DetailMain';
import DetailSide from './DetailSide/DetailSide';
import DetailNav from './DetailNav';

import './Detail.scss';

const Detail = () => {
  const [productBox, setProductBox] = useState([]);

  // console.log(productBox);
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
          <DetailMain productBox={productBox} />
          <DetailSide />
        </div>
      </div>
    </main>
  );
};

export default Detail;
