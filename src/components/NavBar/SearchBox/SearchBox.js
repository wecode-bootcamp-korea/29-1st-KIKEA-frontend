import React, { useState } from 'react';
import './SearchBox.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="search-box-container">
      <input
        className="search-box"
        type="search"
        placeholder="검색어 입력"
        searchInput={searchInput}
      />
      <button className="search-btn">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </button>
      <button className="delete-btn">
        <FontAwesomeIcon icon={faTimesCircle} className="delete-icon" />
      </button>
    </div>
  );
};

export default SearchBox;
