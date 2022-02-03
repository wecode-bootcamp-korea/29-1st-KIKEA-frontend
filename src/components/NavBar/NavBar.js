import React from 'react';
import SearchBox from './SearchBox/SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import './NaviBar.scss';
import NavIcons from './NavIcons/NavIcons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ showMenu, showLoginBar }) => {
  return (
    <div className="sidebar-nav-container">
      <section className="menu">
        <button className="side-bar-on-btn" onClick={showMenu}>
          <FontAwesomeIcon icon={faBars} className="side-bar-btn" />
        </button>
      </section>
      <section className="header-container">
        <div className="main-nav">
          <div className="nav-left">
            <img className="kikea-logo" alt="kikea" src="/images/logo.jpg" />
          </div>
          <div className="nav-center">
            <SearchBox />
          </div>
          <div className="nav-icons-container">
            <NavIcons showLoginBar={showLoginBar} />
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
  );
};

export default NavBar;
