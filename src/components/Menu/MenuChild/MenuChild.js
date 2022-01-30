import React from 'react';

import './MenuChild.scss';

// ============= MenuChild 컴포넌트 사용 미정 / 추후 삭제 ================

const MenuChild = () => {
  return (
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
  );
};

export default MenuChild;
