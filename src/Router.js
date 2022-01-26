import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Member from './pages/Member/Member';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member" element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
