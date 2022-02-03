import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginMain.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const LoginMain = () => {
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
    passwordType: 'password',
  });

  const changeInfo = e => {
    const { name, value } = e.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const signUp = () => {
    navigate('/member');
  };

  const signIn = () => {
    console.log('로그인');
    fetch('http://192.168.0.69:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({ ...inputState }),
    });
  };

  const loginSubmit = event => {
    event.preventDefault();
  };

  const passwordTypeChange = () => {
    setInputState({
      ...inputState,
      passwordType:
        inputState.passwordType === 'password' ? 'text' : 'password',
    });
  };

  return (
    <div className="loginmain">
      <form className="login-form" onSubmit={loginSubmit}>
        <div className="input-box">
          <input
            className="member-email"
            type="text"
            name="email"
            onChange={changeInfo}
            placeholder="  "
            required
            autoComplete="off"
          />
          <label className="form-label">
            <span>이메일 또는 확인된 휴대폰 번호</span>
          </label>
        </div>
        <p>
          다른 로그인 옵션 : <span>일회용 코드로 로그인</span>
        </p>
        <div className="input-box">
          <input
            className="member-password"
            type={inputState.passwordType}
            name="password"
            placeholder="  "
            onChange={changeInfo}
            required
          />

          <label className="form-label">
            <span>비밀번호</span>
          </label>
          <span>
            <FontAwesomeIcon
              icon={faEye}
              className="password-type"
              onClick={passwordTypeChange}
            />
          </span>
        </div>
        <p>
          <span>비밀번호 찾기</span>
        </p>
        <button className="login-button " onClick={signIn}>
          로그인
        </button>
      </form>

      <h4>KIKEA 계정이 없으신가요? 지금 바로 만들어보세요:</h4>

      <button className="signup-button" onClick={signUp}>
        개인 회원 가입하기
      </button>

      <button className="signup-button">비즈니스 회원 가입하기</button>
    </div>
  );
};

export default LoginMain;
