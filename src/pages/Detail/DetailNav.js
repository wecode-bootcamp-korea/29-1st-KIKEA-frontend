import React from 'react';
import './DetailNav.scss';

const DetailNav = () => {
  return (
    <div className="detailNav-container">
      <nav className="detailNav">
        <ol className="detail-list">
          <li className="detail-list-item">
            제품
            <a href="" className="detail-list-item-link" />
          </li>

          <li className="detail-list-item">›</li>
          <li className="detail-list-item">
            조명
            <a href="" className="detail-list-item-link" />
          </li>
          <li className="detail-list-item">›</li>
          <li className="detail-list-item">TÄLLBYN 텔뷘 탁상스탠드</li>
        </ol>
      </nav>
    </div>
  );
};

export default DetailNav;
