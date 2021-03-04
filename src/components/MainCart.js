import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import CartTotal from './CartTotal';
import Items from '../static/data/items.json';

const MainCart = (props) => {
  const productsInCart = props.productsInCart;
  const [products, setProducts] = useState([]);
  let productsCards = [];

  useEffect(() => {
    for (let product in productsInCart) {
      if (product in Items) {
        console.log(Items[product]);
        productsCards.push(
          <CartCard
            key={product}
            id={product}
            removeCard={props.handleRemoveCard}
            item={Items[product]}
          />
        );
      }
    }
    setProducts(productsCards);
  }, [props.productsInCart]);

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
