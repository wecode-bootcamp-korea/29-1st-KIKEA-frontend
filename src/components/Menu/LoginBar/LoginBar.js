import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import './LoginBar.scss';

const LoginBar = ({ closeLoginBar, isShownLoginBar }) => {
  const loginBarRef = useRef();
  const navigate = useNavigate();

  const toLogin = e => {
    navigate('/login');
  };

  const toMember = e => {
    navigate('/member');
  };

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (
        isShownLoginBar &&
        loginBarRef.current &&
        !loginBarRef.current.contains(e.target)
      ) {
        closeLoginBar();
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isShownLoginBar, closeLoginBar]);

  return (
    <div
      className={
        'login-bar-container-' + (isShownLoginBar ? 'slide-out' : 'slide-in')
      }
      ref={loginBarRef}
    >
      <div className="login-signup-content">
        <div className="login-content-container">
          <button
            onClick={closeLoginBar}
            type="button"
            className="close-login-btn"
          >
            <FontAwesomeIcon icon={faTimesCircle} className="faTimesCircle" />
          </button>
          <div className="login-content">
            <span className="login-message">Hej</span>
            <button
              type="button"
              className="to-login-page-btn"
              onClick={toLogin}
            >
              로그인
            </button>
          </div>
        </div>
        <div className="signup-content-container">
          <div className="signup-content-wrapper">
            <div className="signup-content">
              <span className="signup-message">KIKEA 계정 생성하기</span>
              <p className="signup-text">
                계정을 생성하여 KIKEA Family 클럽에 지금
                가입해보세요,&nbsp;&nbsp;가입은 무료입니다!
              </p>
            </div>
            <button type="button" className="signup-btn " onClick={toMember}>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="signup-icon"
              />
            </button>
          </div>
        </div>
        <div className="signup-content-container signup-content-container-last">
          <div className="signup-content-wrapper">
            <div className="signup-content">
              <span className="signup-message ">
                KIKEA for Business 계정 생성하기
              </span>
              <p className="signup-text">
                KIKEA 비즈니스 계정을 생성하여 다양한 비즈니스 회원 혜택을
                받아보세요
              </p>
            </div>
            <button type="button" className="signup-btn" onClick={toMember}>
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="signup-icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="other-service-content">
        <ul className="other-service-list">
          <li className="other-service-items" onClick={toLogin}>
            로그인
          </li>
          <li className="other-service-items">위시리스트</li>
          <li className="other-service-items">플래너</li>
          <li className="other-service-items">배송 조회</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginBar;
