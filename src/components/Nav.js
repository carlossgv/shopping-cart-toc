import React from 'react';
import Link from './Link';
import './Nav.css';
import wavesLogo from '../static/img/wavesLogo.png';
import CartLogo from './CartLogo';

const Nav = () => {
  return (
    <nav>
      <div className="navContent">
        <img src={wavesLogo} alt="Waves Logo" height="100px"></img>
        <Link url="/" text="Home" />
        <Link url="/shop" text="Shop" />
        <CartLogo url="/cart" qty="0" />
      </div>
    </nav>
  );
};

export default Nav;