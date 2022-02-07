import React from 'react';
import './NavIcons.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {
  faWarehouse,
  faShoppingBag,
  faHeart,
  faUser,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

const NavIcons = ({ showLoginBar }) => {
  return (
    <ul className="nav-icons-list">
      <div type="button" className="ware-house-btn">
        <span className="btn-span">매장 정보 확인</span>
        <p className="btn-span-two">
          {' '}
          <FontAwesomeIcon
            className="ware-house-icon icon"
            icon={faWarehouse}
          />
          &nbsp;매장 선택
        </p>
      </div>
      <li className="nav-icon-list">
        <FontAwesomeIcon className="truck-icon icon" icon={faTruck} />
      </li>
      <li className="nav-icon-list">
        <FontAwesomeIcon
          onClick={showLoginBar}
          className="user-icon icon"
          icon={faUser}
        />
      </li>
      <li className="nav-icon-lgiist">
        <FontAwesomeIcon className="heart-icon icon" icon={faHeart} />
      </li>
      <li className="nav-icon-list">
        <FontAwesomeIcon className="bag-icon icon" icon={faShoppingBag} />
      </li>
    </ul>
  );
};

export default NavIcons;
