import React from 'react';

const CartDiscountForm = () => {
  return (
    <form className="discountForm">
      <label htmlFor="discountCode">ADD A DISCOUNT CODE</label>
      <div className="discountInput">
        <input type="text"></input>
        <button className="cartOptionButton">ADD</button>
      </div>
    </form>
  );
};

export default CartDiscountForm;
