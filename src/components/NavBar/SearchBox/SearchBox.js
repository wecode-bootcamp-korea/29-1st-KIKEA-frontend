import React from 'react';
import './SearchBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  return (
    <>
      <div className="search-box-container">
        <input className="search-box" type="text" placeholder="검색어 입력" />
        <button className="search-btn">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
