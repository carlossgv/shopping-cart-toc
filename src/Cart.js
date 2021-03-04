import React from 'react';
import MainCart from './components/MainCart';
import Footer from './components/Footer';
import './Cart.css';

const Cart = (props) => {
  return (
    <div className="cart">
      <MainCart productsInCart = {props.productsInCart} />
      <Footer />
    </div>
  );
};

export default Cart;
