import React, { useState, useEffect } from 'react';
import DetailNav from './DetailNav';
import DetailMain from './DetailMain/DetailMain';
import DetailSide from './DetailSide/DetailSide';
import DetailAside from './DetailAside/DetailAside';
import DetailDescSide from './DetailDescSide/DetailDescSide';
import './Detail.scss';

const Detail = () => {
  const [productBox, setProductBox] = useState([]);
  const [isOpen, setIsOpen] = useState(null);
  const [descSideOpen, setDescSideOpen] = useState(false);

  const toggleAddBtn = () => {
    setIsOpen(!isOpen);
  };

  const toggleCloseBtn = () => {
    setIsOpen(false);
  };

  const toggleDescBtn = () => {
    setDescSideOpen(!descSideOpen);
  };

  useEffect(() => {
    fetch('/data/detailMainData.json')
      .then(res => res.json())
      .then(data => {
        setProductBox(data);
      });
  }, []);

  // const TOTAL_SLIDES = 4;
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slideRef = useRef(null);

  // const NextSlide = () => {
  //   if (currentSlide >= TOTAL_SLIDES) {
  //     setCurrentSlide(0);
  //   } else {
  //     setCurrentSlide(currentSlide + 1);
  //   }
  // };

  // const PrevSlide = () => {
  //   if (currentSlide === 0) {
  //     setCurrentSlide(TOTAL_SLIDES);
  //   } else {
  //     setCurrentSlide(currentSlide - 1);
  //   }
  // };

  // useEffect(() => {
  //   slideRef.current.style.transition = 'all 0.5s ease-in-out';
  //   slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  // }, [currentSlide]);

  // const out = useRef();

  // const handleClose = e => {
  //   if (isOpen && !out.current.contains(e.target)) setIsOpen(null);
  // };

  // useEffect(() => {
  //   window.addEventListener('click', handleClose);
  //   return () => {
  //     window.removeEventListener('click', handleClose);
  //   };
  // }, []);

  return (
    <main className="detail-page-container">
      <div className="detail-page">
        <DetailNav />
        <div className="detail-container">
          <DetailMain productBox={productBox} toggleDescBtn={toggleDescBtn} />
          <DetailSide
            isOpen={isOpen}
            toggleAddBtn={toggleAddBtn}
            productBox={productBox}
          />
          {isOpen && (
            <DetailAside isOpen={isOpen} toggleCloseBtn={toggleCloseBtn} />
          )}
          <DetailDescSide descSideOpen={descSideOpen} />
        </div>
      </div>
    </main>
  );
};

export default Detail;
