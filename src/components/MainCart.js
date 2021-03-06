import React, { useEffect, useState } from 'react';
import CartCard from './CartCard';
import CartTotal from './CartTotal';
import Items from '../static/data/items.json';
import _ from 'lodash';
import './MainCart.css';

const MainCart = (props) => {
  const productsCardsList = [];
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [productsAdded, setProductsAdded] = useState([]);

  const cardTotal = (cardObject) => {
    let tempArray = [...productsAdded];
    let total = 0;

    tempArray.push(cardObject);

    tempArray.forEach((item) => {
      console.log(item);
      total = total + item.price;
    });

    setProductsAdded(tempArray);
    setTotal(total);
  };

  useEffect(() => {
    props.productsInCart.forEach((productId) => {
      productsCardsList.push(
        <CartCard
          key={_.uniqueId}
          id={`cartCard_${productId}`}
          item={Items[productId]}
          removeCard={props.handleRemoveCard}
          cardTotal={cardTotal}
        />
      );
    });

    setProducts(productsCardsList);
    setTotal(total);
  }, [props]);

  return (
    <div className="mainCart">
      <div className="cart">
        <h1>Shopping Cart</h1>
        <div>
          <div className="cartProducts">{products}</div>
          <CartTotal total={total} />
        </div>
      </div>
    </div>
  );
};

export default MainCart;
