import React, { useState } from 'react';
import SearchBox from './SearchBox/SearchBox';
import SearchFilter from './SearchFilter/SearchFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import './NaviBar.scss';
import NavIcons from './NavIcons/NavIcons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ showMenu, showLoginBar }) => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  // const [searchData, setSearchData] = useState([];)

  const showFilter = () => {
    setFilterVisible(true);
  };
  const closeFilter = () => {
    setFilterVisible(false);
  };

  const handleInput = e => {
    setSearchInput(e.target.value);
  };

  // const filteredSearchData = searchData.filter(data => {
  //   return searchData.name.toLowerCase().includes(searchInput.toLowerCase());
  // });

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
            <img
              className="kikea-logo"
              alt="kikea"
              src="/images/logo.jpg"
              onClick={closeFilter}
            />
          </div>
          <div className="nav-center">
            <SearchBox
              showFilter={showFilter}
              handleInput={handleInput}
              searchInput={searchInput}
              // searchData={filteredSearchData}
            />
            {filterVisible && <SearchFilter />}
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
            <li className="all-products-menu">쇼룸</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
