import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './DetailAside.scss';

const DetailAside = ({
  isOpen,
  toggleCloseBtn,
  productBox,
  secondProductBox,
}) => {
  return (
    <aside className={isOpen ? 'add-item-slide-in' : 'add-item-slide-out'}>
      <div className="aside-top">
        <button className="close-btn" onClick={toggleCloseBtn}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <p className="add-item-comment">
          {productBox.result?.[0].name}이 장바구니에
          <br />
          추가되었습니다.
        </p>
        <button className="go-bag">장바구니로 가기</button>
      </div>
      <div className="related-products-wrap">
        <p className="related-products">관련 제품</p>
        <ul className="related-products-list">
          {secondProductBox.result &&
            secondProductBox.result.map((item, index) => (
              <li className="related-products-item" key={index}>
                <img
                  src={item.default_image}
                  alt="related-products-img"
                  className="related-products-img"
                />
                <div className="related-products-item-contents">
                  <p className="related-products-item-name">{item.name}</p>
                  <span className="related-products-item-info">
                    {item.type}
                  </span>
                  <div className="related-products-item-price-box">
                    <span className="related-products-item-unit">₩</span>
                    <span className="related-products-item-price">
                      {item.price?.toLocaleString()}
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default DetailAside;
