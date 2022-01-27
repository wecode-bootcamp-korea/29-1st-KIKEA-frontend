import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import ProductTypeMain from './pages/ProductType/ProductTypeMain';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/productTypeMain" element={<ProductTypeMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
