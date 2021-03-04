import React from 'react';
import MainShop from './components/MainShop';
import Footer from './components/Footer';
import './Shop.css';

const Shop = (props) => {
  return (
    <div className="shop">
      <MainShop handleAddToCart={props.handleAddToCart} />
      <Footer />
    </div>
  );
};

export default Shop;
