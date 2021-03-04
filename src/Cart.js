import React from 'react';
import Nav from './components/Nav';
import MainCart from './components/MainCart';
import Footer from './components/Footer';

const Cart = () => {
  return (
    <div className="cart">
      <Nav />
      <MainCart />
      <Footer />
    </div>
  );
};

export default Cart;
