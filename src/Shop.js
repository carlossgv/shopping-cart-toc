import React from 'react';
import MainShop from './components/MainShop';
import MainCart from './components/MainCart';
import Footer from './components/Footer';
import './Shop.css';

const Shop = (props) => {
  // console.log(props.items);
  return (
    <>
      <div className="shop">
        <MainShop items={props.items} handleAddToCart={props.handleAddToCart} />
        <MainCart
          items={props.items}
          productsInCart={props.productsInCart}
          handleRemoveCard={props.handleRemoveCard}
        />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
