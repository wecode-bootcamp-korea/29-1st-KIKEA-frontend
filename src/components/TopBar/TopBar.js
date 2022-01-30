import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TopBar.scss';
import 'font-awesome/css/font-awesome.min.css';
import {
  faInfoCircle,
  faPhoneAlt,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div className="message-container">
      <div className="message-content">
        <FontAwesomeIcon icon={faInfoCircle} />
        <span className="message-text">코로나 19 대응 공지</span>
      </div>
      <div className="message-content">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <span className="message-text">실시간 주문 서비스</span>
      </div>
      <div className="message-content">
        <FontAwesomeIcon icon={faTruck} />
        <span className="message-text">KIKEA 인기제품</span>
      </div>
    </div>
  );
};

export default TopBar;
