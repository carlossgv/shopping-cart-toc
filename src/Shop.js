import React from 'react';
import MainShop from './components/MainShop';
import MainCart from './components/MainCart';
import Footer from './components/Footer';
import './Shop.css';

const Shop = (props) => {
  return (
    <>
      <div className="shop">
        <MainShop handleAddToCart={props.handleAddToCart} />
        <MainCart
          productsInCart={props.productsInCart}
          handleRemoveCard={props.handleRemoveCard}
        />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
