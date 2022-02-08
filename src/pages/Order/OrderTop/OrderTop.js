import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import LoginBar from '../../../components/Menu/LoginBar/LoginBar';
import './OrderTop.scss';

const OrderTop = () => {
  const [isVisibleLoginBar, setIsVisibleLoginBar] = useState(false);

  const isVisible = () => {
    setIsVisibleLoginBar(prev => !prev);
  };
  return (
    <div className="ordertop">
      <div className="logo-container">
        <img alt="logo" src="/images/logo.jpg" className="logo-image" />
      </div>
      <div className="mypage-font">
        <FontAwesomeIcon
          //onClick={showLoginBar}
          className="user-icon icon"
          icon={faUser}
          onClick={isVisible}
        />
      </div>
      <LoginBar
        loginBarVisible={isVisibleLoginBar}
        closeLoginBar={() => false}
      />
    </div>
  );
};

export default OrderTop;
