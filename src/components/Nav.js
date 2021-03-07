import React, { useEffect } from 'react';
import './Nav.css';
import wavesLogo from '../static/img/wavesLogo.png';
import CartLogo from './CartLogo';

const Nav = (props) => {
  const handleCart = () => {
    console.log('handlingCart');
    const cart = document.querySelector('.mainCart');

    if (window.innerWidth <= 1199) {
      if (cart.style.opacity === '0') {
        cart.style.opacity = 100;
        cart.style.zIndex = 1;
      } else {
        cart.style.opacity = 0;
        cart.style.zIndex = -1;
      }
    } else {
      cart.style.opacity = 100;
      cart.style.zIndex = 1;
    }
  };

  return (
    <nav>
      <div className="navContent">
        <img src={wavesLogo} alt="Waves Logo" height="100px"></img>
        <a href={process.env.PUBLIC_URL + '/'}>Home</a>
        <a href={process.env.PUBLIC_URL + '/shop'}>Shop</a>
        <CartLogo handleCart={handleCart} qty={props.qty} />
      </div>
    </nav>
  );
};

export default Nav;
