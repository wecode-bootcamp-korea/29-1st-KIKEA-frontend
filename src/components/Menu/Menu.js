import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import MenuChild from './MenuChild';
function Menu({ closeMenu }) {
  const [isShownList, setIsShownList] = useState(false);

  // const navigate = useNavigate();
  return (
    <>
      <div className="side-bar-container">
        <div className="side-bar-nav">
          <button
            onClick={closeMenu}
            className="side-bar-off-btn"
            type="button"
          >
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="close-side-bar-btn"
            />
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
              모든 제품
            </p>
            {isShownList === true ? <List /> : null}
            <p
              className="side-bar-category side-bar-category-last"
              // onClick={showMenuChild}
            >
              온라인 쇼룸
            </p>

            <ul className="product-list">
              <li className="product-list-content">할인 중</li>
              <li className="product-list-content">신제품</li>
              <li className="product-list-content">더 낮은 새로운 가격</li>
              <li className="product-list-content">아이디어</li>
              <li className="product-list-content">브랜드 켐페인</li>
              <li className="product-list-content list-last">새로운 소식</li>
            </ul>
            <ul className="service-list">
              <li className="service-list-content">매장안내</li>
              <li className="service-list-content">IKEA Family</li>
              <li className="service-list-content">IKEA for Business</li>
              <li className="service-list-content">IKEA Live</li>
              <li className="service-list-content">고객지원</li>
              <li className="service-list-content">배송조회</li>
              <li className="service-list-content">내 프로필</li>
            </ul>
            <div className="side-bar-footer-container">
              <button type="button" className="side-bar-foot-btn">
                한국어
              </button>
              <button type="button" className="side-bar-foot-btn">
                국가 변경
              </button>
            </div>
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

export default Menu;
