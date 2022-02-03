import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import DetailC from './pages/Detail/DetailC';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<DetailC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
