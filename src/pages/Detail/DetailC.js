import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  const { id } = useParams();

  const toggleCartBtn = () => {
    setIsOpen(prev => !prev);
    goCart();
  };

  const toggleDescBtn = () => {
    setDescSideOpen(prev => !prev);
  };

  useEffect(() => {
    fetch(`http://192.168.147.112:8000/products?product=${id}`)
      .then(res => res.json())
      .then(data => {
        setProductBox(data);
      });

    fetch('http://192.168.147.112:8000/products?subcategory=1')
      .then(res => res.json())
      .then(data => {
        setSecondProductBox(data);
      });
  }, []);

  const toggleSideBar = () => {
    if (isOpen) return toggleCartBtn();
    if (descSideOpen) return toggleDescBtn();
  };

  const goCart = () => {
    fetch('http://192.168.147.112:8000/orders/carts/1', {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('token'),
      },
      body: JSON.stringify({ quantity: 1 }),
    });
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
              goCart={goCart}
            />
            {isOpen && (
              <DetailAside
                isOpen={isOpen}
                toggleCloseBtn={toggleCartBtn}
                productBox={productBox}
                secondProductBox={secondProductBox}
              />
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
