import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
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
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  const toMain = () => {
    navigate('/');
  };

  const showFilter = () => {
    setFilterVisible(true);
  };

  const handleInput = e => {
    setSearchInput(e.target.value);
  };

  const clearSearch = () => {
    setSearchInput('');
  };

  const filteredSearchData = searchData.filter(kikea => {
    return kikea.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  useEffect(() => {
    fetch('10.58.5.10:8000/products/product')
      .then(res => res.json())
      .then(data => {
        setSearchData(data);
      });
  }, []);

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
              onClick={toMain}
            />
          </div>
          <div className="nav-center">
            <SearchBox
              showFilter={showFilter}
              handleInput={handleInput}
              searchInput={searchInput}
              clearSearch={clearSearch}
            />
            {filterVisible && (
              <SearchFilter
                searchData={filteredSearchData}
                setSearchInput={setSearchInput}
                setFilterVisible={setFilterVisible}
              />
            )}
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
