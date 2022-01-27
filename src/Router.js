import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import ProductCategory from './pages/ProductType/ProductCategory/ProductType';
import ProductSuggestion from './pages/ProductType/ProductSuggestion/ProductSuggestion';
import ProducFitler from './pages/ProductType/ProductFilter/ProductFilter';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/productCategory" element={<ProductCategory />} />
        <Route path="/productSuggestion" element={<ProductSuggestion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
