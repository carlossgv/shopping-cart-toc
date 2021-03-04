import React from 'react';

const CartLogo = (props) => {
  return (
    <a href={props.url} className="cartLogo">
      <p>{`Cart (${props.qty})`}</p>
    </a>
  );
};

export default CartLogo;
