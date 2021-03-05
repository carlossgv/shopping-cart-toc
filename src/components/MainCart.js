import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import CartTotal from './CartTotal';
import Items from '../static/data/items.json';

const MainCart = (props) => {
  const productsCardsList = [];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    props.productsInCart.forEach((productId) => {
      productsCardsList.push(
        <CartCard
          id={`cartCard_${productId}`}
          key={`cartCard_${productId}`}
          item={Items[productId]}
          removeCard={props.handleRemoveCard}
        />
      );
    });


    setProducts(productsCardsList);
  }, [props]);

  return (
    <div className="mainCart">
      <h1>SHOPPING CART</h1>
      <div>
        <div className="cartProducts">{products}</div>
        <CartTotal />
      </div>
    </div>
  );
};

export default MainCart;
