import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import CartTotal from './CartTotal';
import Items from '../static/data/items.json';

const MainCart = (props) => {
  const productsInCart = ['1', '2', '4'];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productsCards = [];
    for (let product in productsInCart) {
      if (product in Items) {
        // console.log(Items[product]);
        productsCards.push(<CartCard key={product} item={Items[product]} />);
      }
    }
    setProducts(productsCards);
  }, []);

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
