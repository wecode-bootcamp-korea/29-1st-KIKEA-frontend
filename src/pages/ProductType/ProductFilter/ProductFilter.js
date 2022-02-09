import React, { useState, useRef, useEffect } from 'react';
import './ProductFilter.scss';

import ProductCard from './ProductCard/ProductCard';

const ProductFilter = ({ items, filterItems }) => {
  const [typeFilterVisible, setTypeFilterVisible] = useState(false);
  const [typeFilterClicked, setTypeFilterClicked] = useState(false);

  const TypeFilterRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (
        typeFilterVisible &&
        TypeFilterRef.current &&
        !TypeFilterRef.current.contains(e.target)
      ) {
        setTypeFilterVisible(false);
        setTypeFilterClicked(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [typeFilterVisible, setTypeFilterVisible]);

  return (
    <>
      <div className="filter-section-container">
        <div className="filter-btn-container" ref={TypeFilterRef}>
          <button
            type="button"
            className={
              'filter-btn' + (typeFilterClicked ? '-focused' : '-default')
            }
            onClick={() => {
              setTypeFilterVisible(!typeFilterVisible);
              setTypeFilterClicked(!typeFilterClicked);
            }}
          >
            정렬
          </button>
          {typeFilterVisible && <Filter filterItems={filterItems} />}
        </div>
        <div className="filter-btn-category" />
      </div>
      <div className="product-card-wrapper">
        {items.products?.map(kikea => {
          return <ProductCard key={kikea.id} kikea={kikea} />;
        })}
      </div>
    </>
  );
};

export default ProductFilter;

const Filter = ({ filterItems }) => {
  return (
    <div className="filter-options-container">
      <ol>
        <li
          className="filter-options"
          onClick={() => {
            filterItems();
          }}
        >
          낮은 가격 순
        </li>
        {/* <li
          className="filter-options"
          onClick={() => {
            filterItems(id);
          }}
        >
          높은 가격 순{' '}
        </li>
        <li
          className="filter-options"
          onClick={() => {
            filterItems(id);
          }}
        >
          최신순
        </li>
        <li
          className="filter-options"
          onClick={() => {
            filterItems(id);
          }}
        >
          재고순
        </li> */}
      </ol>
    </div>
  );
};

// const DATA = [
//   {
//     id: 1,
//     default_image: '',
//     type: '헬로우',
//     price: 292000,
//     review_rating: 3.41,
//     review_count: {
//       review_num: 2,
//     },
//   },
// ];
