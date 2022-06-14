import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Products from './Products';

const App = () => (
  <div className="page">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
