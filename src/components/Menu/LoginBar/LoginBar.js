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
                ๋ก๊ทธ์์
              </button>
            )) || (
              <button
                type="button"
                className="to-login-page-btn"
                onClick={toLogin}
              >
                ๋ก๊ทธ์ธ
              </button>
            )}
          </div>
        </div>
        {(sessionStorage.getItem('token') && (
          <div className="signup-content-container">
            <div className="signup-content-wrapper">
              <div className="signup-content">
                <span className="signup-message">๋์ KIKEA Family</span>
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
                  <span className="signup-message">KIKEA ๊ณ์? ์์ฑํ๊ธฐ</span>
                  <p className="signup-text">
                    ๊ณ์?์ ์์ฑํ์ฌ KIKEA Family ํด๋ฝ์ ์ง๊ธ
                    ๊ฐ์ํด๋ณด์ธ์,&nbsp;&nbsp;๊ฐ์์ ๋ฌด๋ฃ์๋๋ค!
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
                    KIKEA for Business ๊ณ์? ์์ฑํ๊ธฐ
                  </span>
                  <p className="signup-text">
                    KIKEA ๋น์ฆ๋์ค ๊ณ์?์ ์์ฑํ์ฌ ๋ค์ํ ๋น์ฆ๋์ค ํ์ ํํ์
                    ๋ฐ์๋ณด์ธ์
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
              ๋ก๊ทธ์์
            </li>
          )) || (
            <li className="other-service-items" onClick={toLogin}>
              ๋ก๊ทธ์ธ
            </li>
          )}
          <li className="other-service-items">์์๋ฆฌ์คํธ</li>
          <li className="other-service-items">ํ๋๋</li>
          <li className="other-service-items">๋ฐฐ์ก ์กฐํ</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginBar;
