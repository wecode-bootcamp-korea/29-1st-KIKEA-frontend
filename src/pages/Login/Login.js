import React from 'react';
import './Login.scss';
import LoginAside from './LoginAside/LoginAside';
import LoginMain from './LoginMain/LoginMain';

const Login = () => {
  return (
    <div className="login">
      <LoginAside />
      <LoginMain />
    </div>
  );
};

export default Login;
