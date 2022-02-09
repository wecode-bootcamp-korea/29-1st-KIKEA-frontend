import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './LoginBar.scss';

const LoginBar = ({ closeLoginBar, loginBarVisible }) => {
  const loginBarRef = useRef();
  const navigate = useNavigate();

  const toLogin = e => {
    navigate('/login');
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    closeLoginBar();
    navigate('/');
  };

  const toMember = e => {
    navigate('/member');
  };

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (
        loginBarVisible &&
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
  }, [loginBarVisible, closeLoginBar]);

  return (
    <div
      className={
        'login-bar-container-' + (loginBarVisible ? 'slide-out' : 'slide-in')
      }
      ref={loginBarRef}
    >
      <div className="login-signup-content">
        <div className="login-content-container">
          <div className="login-content">
            <span className="login-message">
              Hej
              {sessionStorage.getItem('token') && (
                <span style={{ color: '#FFDB00' }}>
                  &nbsp; {sessionStorage.getItem('name')}
                </span>
              )}
              <span className="user-name" />
            </span>
            {(sessionStorage.getItem('token') && (
              <button
                type="button"
                className="to-login-page-btn"
                onClick={logout}
              >
                로그아웃
              </button>
            )) || (
              <button
                type="button"
                className="to-login-page-btn"
                onClick={toLogin}
              >
                로그인
              </button>
            )}
          </div>
        </div>
        {(sessionStorage.getItem('token') && (
          <div className="signup-content-container">
            <div className="signup-content-wrapper">
              <div className="signup-content">
                <span className="signup-message">나의 KIKEA Family</span>
              </div>
              <button type="button" className="signup-btn " onClick={toMember}>
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  className="signup-icon"
                />
              </button>
            </div>
          </div>
        )) || (
          <>
            <div className="signup-content-container">
              <div className="signup-content-wrapper">
                <div className="signup-content">
                  <span className="signup-message">KIKEA 계정 생성하기</span>
                  <p className="signup-text">
                    계정을 생성하여 KIKEA Family 클럽에 지금
                    가입해보세요,&nbsp;&nbsp;가입은 무료입니다!
                  </p>
                </div>
                <button
                  type="button"
                  className="signup-btn "
                  onClick={toMember}
                >
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
                <button
                  type="button"
                  className="signup-btn "
                  onClick={toMember}
                >
                  <FontAwesomeIcon
                    icon={faArrowCircleRight}
                    className="signup-icon"
                  />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="other-service-content">
        <ul className="other-service-list">
          {(sessionStorage.getItem('token') && (
            <li className="other-service-items" onClick={logout}>
              로그아웃
            </li>
          )) || (
            <li className="other-service-items" onClick={toLogin}>
              로그인
            </li>
          )}
          <li className="other-service-items">위시리스트</li>
          <li className="other-service-items">플래너</li>
          <li className="other-service-items">배송 조회</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginBar;
