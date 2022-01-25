import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MenuChild.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function MenuChild() {
  // const navigate = useNavigate();
  return (
    <>
      <div className="menu-child-container">
        <button
          // onClick={closeMenuChild}

          className="close-menu-child"
          type="button"
        ></button>
        <p className="category-title">온라인 쇼룸</p>
        <div className="category-images-container">
          <div className="category-images">
            <img src="" alt="" className="" />
            <span className="name">수녕</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuChild;
