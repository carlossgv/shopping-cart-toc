import React from 'react';
import TotalTable from './TotalTable';
import CartDiscountForm from './CartDiscountForm';
import CartLoginDiv from './CartLoginDiv';

const CartTotal = (props) => {
  return (
    <div className="cartTotal">
      <CartDiscountForm />
      <CartLoginDiv />
      <div className="cartTotalDiv">
        <TotalTable total={props.total} />
        <button className="checkoutButton">CONTINUE TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTotal;
