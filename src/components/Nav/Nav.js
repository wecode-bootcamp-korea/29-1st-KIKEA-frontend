import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../Menu/Menu';
import MenuChild from '../Menu/MenuChild';
import LoginBar from '../Menu/LoginBar';

import './Nav.scss';
import 'font-awesome/css/font-awesome.min.css';
import {
  faBars,
  faInfoCircle,
  faPhoneAlt,
  faSearch,
  faCamera,
  faWarehouse,
  faShoppingBag,
  faHeart,
  faUser,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isShownMenu, setIsShownMenu] = useState(false);
  const [isShownLoginBar, setIsShownLoginBar] = useState(false);

  const closeMenu = e => {
    setIsShownMenu(false);
  };
  const showMenu = e => {
    setIsShownMenu(true);
  };

  const closeLoginBar = e => {
    setIsShownLoginBar(false);
  };
  const showLoginBar = e => {
    setIsShownLoginBar(true);
  };

  // const [isShownMenuChild, setIsShownMenuChild] = useState(false);

  // const closeMenuChild = e => {
  //   setIsShownMenuChild(false);
  // };

  // const showMenuChild = e => {
  //   setIsShownMenuChild(true);

  const navigate = useNavigate();
  // function goToMain() {
  //   navigate('/');
  // }

  return (
    <>
      <div className="message-container">
        <div
          // onClick={}
          className="message-content"
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          <span className="message-text">코로나 19 대응 공지</span>
        </div>
        <div
          // onClick={}
          className="message-content"
        >
          <FontAwesomeIcon icon={faPhoneAlt} />
          <span className="message-text">실시간 주문 서비스</span>
        </div>
        <div
          // onClick={}
          className="message-content"
        >
          <FontAwesomeIcon icon={faTruck} />
          <span className="message-text">KIKEA 인기제품</span>
        </div>
      </div>
      {/* <div className="menu-container" isShownMenu={isShownMenu}>
        <Menu closeMenu={closeMenu} />
      </div> */}
      {isShownMenu === true ? (
        <div className="menu-container" isShownMenu={isShownMenu}>
          <Menu closeMenu={closeMenu} />
        </div>
      ) : null}
      {/* <MenuChild closeMenuChild={closeMenuChild}
          showMenuChild={showMenuChild}/> */}
      {isShownLoginBar === true ? (
        <div className="" isShownLoginBar={isShownLoginBar}>
          <LoginBar closeLoginBar={closeLoginBar} />
        </div>
      ) : null}

      <div className="sidebar-nav-container">
        <section className="menu">
          <button className="side-bar-on-btn" onClick={showMenu}>
            <FontAwesomeIcon icon={faBars} className="side-bar-btn" />
          </button>
        </section>
        <section className="header-container">
          <div className="main-nav">
            <div className="nav-left">
              <img
                onClick={useNavigate('/')}
                className="kikea-logo"
                alt="kikea"
                src="https://www.ikea.com/kr/ko/static/ikea-logo.f7d9229f806b59ec64cb.svg"
              />
            </div>
            <div className="nav-center">
              <input
                className="search-box"
                type="text"
                placeholder="검색어 입력"
              />
            </div>

            <div className="nav-icons-container">
              <ul className="nav-icons-list">
                <li>
                  <FontAwesomeIcon
                    onClick={() => {
                      navigate('/');
                    }}
                    className="ware-house-icon icon"
                    icon={faWarehouse}
                  />
                </li>
                <button
                  onClick={() => {
                    navigate('/');
                  }}
                  type="button"
                  className="ware-house-btn"
                >
                  <span onClick={useNavigate('/detail')} className="btn-span">
                    매장 정보 확인
                  </span>
                  <p onClick={useNavigate('/')} className="btn-span-two">
                    매장 선택
                  </p>
                </button>
                <li className="nav-icon-list">
                  <FontAwesomeIcon
                    onClick={() => {
                      navigate('/');
                    }}
                    className="truck-icon icon"
                    icon={faTruck}
                  />
                </li>
                <li className="nav-icon-list">
                  <FontAwesomeIcon
                    onClick={showLoginBar}
                    className="user-icon icon"
                    icon={faUser}
                  />
                </li>
                <li className="nav-icon-list">
                  <FontAwesomeIcon
                    onClick={useNavigate('/')}
                    className="heart-icon icon"
                    icon={faHeart}
                  />
                </li>
                <li className="nav-icon-list">
                  <FontAwesomeIcon
                    onClick={useNavigate('/detail')}
                    className="bag-icon icon"
                    icon={faShoppingBag}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="all-products-container">
            <ul className="all-products-list">
              <li className="all-products-menu">모든 제품</li>
              <li className="all-products-menu">온라인 쇼룸</li>
            </ul>
          </div>
          <div>
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
            KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA KIKEA
          </div>
        </section>
      </div>
    </>
  );
}

export default Nav;
