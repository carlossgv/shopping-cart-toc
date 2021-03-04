import React from 'react';
import Nav from './components/Nav';
import MainShop from './components/MainShop';
import Footer from './components/Footer';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop">
      <Nav />
      <MainShop />
      <Footer />
    </div>
  );
};

export default Shop;
