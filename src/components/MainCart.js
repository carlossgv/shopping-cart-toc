import React from 'react';
import CartCard from './CartCard';

const MainCart = () => {
  return (
    <div className="mainCart">
      <h1>SHOPPING CART</h1>
      <div>
        <div className="cartProducts">
          <CartCard
            item={{
              title: 'Knee Length Swim Shorts',
              price: 15.99,
              code: 'kneeLengthSwimShorts',
            }}
            removeCard={() => console.log('removed card clicked')}
          />
        </div>
        <div className="cardTotal"></div>
      </div>
    </div>
  );
};

export default MainCart;
