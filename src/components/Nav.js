import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <CartLogo handleCart={handleCart} qty={props.qty} />
      </div>
    </nav>
  );
};

export default Nav;
