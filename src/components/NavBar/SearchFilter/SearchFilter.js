import React from 'react';
import SearchCard from './SearchCard/SearchCard';
import './SearchFilter.scss';

const SearchFilter = ({ searchData, setFilterVisible, setSearchInput }) => {
  return (
    <>
      <div
        className="overlay"
        onClick={() => {
          setFilterVisible(false);
          setSearchInput('');
        }}
      />
      <div className="search-filter-container">
        {searchData.map(kikea => {
          return <SearchCard key={kikea.id} kikea={kikea} />;
        })}
      </div>
    </>
  );
};

export default SearchFilter;
