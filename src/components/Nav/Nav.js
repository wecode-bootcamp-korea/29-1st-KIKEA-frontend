import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <>
      <div className="main">
        <section className="menu">
          <button className="menu-toggle-btn" onClick="">
            toggle
          </button>
        </section>
        <div className="main-nav">
          <div className="nav-left">
            <img className="kikea-logo" alt="kikea" src="" />
          </div>
          <div className="nav-center"></div>
          <div className="nav-right"></div>
        </div>
        <div className="products-menu">
          <ul>
            <li>모든 제품</li>
            <li>온라인 쇼룸</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
