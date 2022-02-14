import React, { useState } from 'react';
import TopBar from './TopBar/TopBar';
import NavBar from './NavBar/NavBar';
import Menu from './Menu/Menu/Menu';
import LoginBar from './Menu/LoginBar/LoginBar';

import './Nav.scss';

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginBarVisible, setLoginBarVisible] = useState(false);

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const showMenu = e => {
    setMenuVisible(true);
  };

  const closeLoginBar = e => {
    setLoginBarVisible(false);
  };

  const showLoginBar = e => {
    setLoginBarVisible(true);
  };

  return (
    <>
      <Menu menuVisible={menuVisible} closeMenu={closeMenu} />
      <LoginBar
        loginBarVisible={loginBarVisible}
        closeLoginBar={closeLoginBar}
      />
      <TopBar />
      <NavBar showLoginBar={showLoginBar} showMenu={showMenu} />
    </>
  );
};

export default Nav;
