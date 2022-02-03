import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductTypeMain from './pages/ProductType/ProductTypeMain';
import DetailC from './pages/Detail/DetailC';
import Member from './pages/Member/Member';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/productTypeMain" element={<ProductTypeMain />} />
        <Route path="/detail" element={<DetailC />} />
        <Route path="/member" element={<Member />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
