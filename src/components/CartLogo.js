import React from 'react';

const CartLogo = (props) => {
  return (
    <div onClick={props.handleCart} className="cartLogo">
      <p>{`Cart (${props.qty})`}</p>
    </div>
  );
};

export default CartLogo;
