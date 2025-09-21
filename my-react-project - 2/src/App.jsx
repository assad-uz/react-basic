import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import Products from './pages/products';
import Men from './pages/Men';
import Women from './pages/Women';

const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/products" element={<Products/>} >
        <Route path="men" element={<Men/>} />
        <Route path="women" element={<Women/>} />
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
};

export default App;