import React from 'react';
import './Nav.css';
import wavesLogo from '../static/img/wavesLogo.png';
import CartLogo from './CartLogo';

const Nav = (props) => {
  return (
    <nav>
      <div className="navContent">
        <img src={wavesLogo} alt="Waves Logo" height="100px"></img>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <CartLogo qty={props.qty} />
      </div>
    </nav>
  );
};

export default Nav;
