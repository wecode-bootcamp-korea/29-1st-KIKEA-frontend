import React from 'react';
import './LoginAside.scss';

const LoginAside = () => {
  return (
    <div className="login-aside">
      <div className="kikea-logo">
        <img alt="logo" src="/images/logo.jpg" />
      </div>
      <div className="login-aside-main">
        <p>로그인</p>
        <p>
          <span>외워야 할 비밀번호가 많아 불편하셨죠?</span>
          <br />
          <span>이제 일회용 코드를 이용하여 간편하게 로그인하세요</span>
        </p>
        <p>* 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능</p>
      </div>
      <div className="login-aside-footer">
        <p>
          KIKEA.kr - <span>쿠키 정책</span>,<span>개인정보처리방침</span>
        </p>
        <p>@ Inter KIKEA Systems W.C 2022 29th</p>
      </div>
    </div>
  );
};

export default LoginAside;
