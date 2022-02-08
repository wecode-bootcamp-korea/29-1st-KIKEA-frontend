import React from 'react';
import './SearchBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ showFilter, handleInput, searchInput, clearSearch }) => {
  return (
    <div className="search-box-container">
      <input
        className="search-box"
        type="text"
        placeholder="검색어 입력"
        value={searchInput}
        onChange={handleInput}
        onClick={showFilter}
      />
      <button className="search-btn">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </button>
      <button className="delete-btn" onClick={clearSearch}>
        <FontAwesomeIcon icon={faTimesCircle} className="delete-icon" />
      </button>
    </div>
  );
};

export default SearchBox;
