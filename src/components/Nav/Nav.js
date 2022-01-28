import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
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

  return (
    <>
      <Menu isShownMenu={isShownMenu} closeMenu={closeMenu} />
      <LoginBar
        isShownLoginBar={isShownLoginBar}
        closeLoginBar={closeLoginBar}
      />
      <TopBar />
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
              <button className="search-btn">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </button>
            </div>

            <div className="nav-icons-container">
              <ul className="nav-icons-list">
                <li>
                  <FontAwesomeIcon
                    className="ware-house-icon icon"
                    icon={faWarehouse}
                  />
                </li>
                <button type="button" className="ware-house-btn">
                  <span className="btn-span">매장 정보 확인</span>
                  <p className="btn-span-two">매장 선택</p>
                </button>
                <li className="nav-icon-list">
                  <FontAwesomeIcon className="truck-icon icon" icon={faTruck} />
                </li>
                <li className="nav-icon-list">
                  <FontAwesomeIcon
                    onClick={showLoginBar}
                    className="user-icon icon"
                    icon={faUser}
                  />
                </li>
                <li className="nav-icon-lgiist">
                  <FontAwesomeIcon className="heart-icon icon" icon={faHeart} />
                </li>
                <li className="nav-icon-list">
                  <FontAwesomeIcon
                    className="bag-icon icon"
                    icon={faShoppingBag}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="all-products-container">
            <ul className="all-products-list">
              <li onClick={showMenu} className="all-products-menu">
                모든 제품
              </li>
              <li className="all-products-menu">온라인 쇼룸</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Nav;
