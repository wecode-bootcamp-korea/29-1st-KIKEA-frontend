import React, { useState } from 'react';
import TopBar from './TopBar/TopBar';
import NavBar from './NavBar/NavBar';
import Menu from './Menu/Menu/Menu';
import LoginBar from './Menu/LoginBar/LoginBar';

import './Nav.scss';

const Nav = () => {
  const [isShownMenu, setIsShownMenu] = useState(false);
  const [isShownLoginBar, setIsShownLoginBar] = useState(false);

  const closeMenu = e => {
    setIsShownMenu(false);
  };
  const showMenu = e => {
    setIsShownMenu(true);
  };

  const closeLoginBar = e => {
    setIsShownLoginBar(false);
  };
  const showLoginBar = e => {
    setIsShownLoginBar(true);
  };

  return (
    <>
      <Menu isShownMenu={isShownMenu} closeMenu={closeMenu} />
      <LoginBar
        isShownLoginBar={isShownLoginBar}
        closeLoginBar={closeLoginBar}
      />
      <TopBar />
      <NavBar showLoginBar={showLoginBar} showMenu={showMenu} />
    </>
  );
};

export default Nav;
