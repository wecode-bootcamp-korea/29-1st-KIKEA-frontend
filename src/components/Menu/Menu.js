import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Menu.scss';

function Menu({ closeMenu }) {
  const [isShownList, setIsShownList] = useState(false);
  const [isShownProducts, setIsShownProducts] = useState(false);
  return (
    <>
      <div className="side-bar-container">
        <div className="side-bar-nav">
          <button
            onClick={closeMenu}
            className="side-bar-off-btn"
            type="button"
          >
            x
          </button>
          <img
            className="kikea-logo"
            alt="kikea"
            src="https://www.ikea.com/kr/ko/static/ikea-logo.f7d9229f806b59ec64cb.svg"
          />
        </div>

        <div className="side-bar-content-container">
          <div className="side-bar-content">
            <p
              className="side-bar-category"
              onClick={() => {
                setIsShownList(!isShownList);
              }}
            >
              모든 제품(클릭해주세요)
            </p>

            {isShownList === true ? <List /> : null}
            <p
              className="side-bar-category"
              onClick={() => {
                setIsShownProducts(!isShownProducts);
              }}
            >
              온라인 쇼룸(클릭해주세요)
            </p>
            {isShownProducts === true ? <Products /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

function List() {
  return (
    <>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
    </>
  );
}

function Products() {
  return (
    <>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
      <p>김성수 화이팅</p>
      <p>주다희 화이팅</p>
      <p>신수녕 화이팅</p>
      <p>박혜린 화이팅</p>
    </>
  );
}

export default Menu;
