import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import Nav from './components/Nav';

const Routes = () => {
  const [qty, setQty] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]);

  const AddToCard = (e) => {
    let productId = e.target.parentElement.parentElement.id;
    let type = e.target.parentElement.parentElement.classList.value;
    let button = '';

    if (type === 'card') {
      button = e.target;
      console.log(button);
    } else {
      button = window
        .querySelector(`.card_${productId}`)
        .querySelector('button');
    }

    if (button.classList.contains('notAdded')) {
      button.classList.remove('notAdded');
      button.classList.add('added');
      button.innerText = 'Remove from cart';

      setProductsInCart((arr) => [...arr, productId]);
    } else {
      button.classList.remove('added');
      button.classList.add('notAdded');
      button.innerText = 'Add to cart';
      console.log(productsInCart, productId);

      setProductsInCart((arr) => [...arr].filter((item) => item !== productId));
    }
  };

  useEffect(() => {
    let newQty = productsInCart.length;
    setQty(newQty);
  }, [productsInCart]);

  return (
    <BrowserRouter>
      <Nav qty={qty} />
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          exact
          path="/shop"
          render={(props) => (
            <Shop
              {...props}
              productsInCart={productsInCart}
              handleAddToCart={AddToCard}
              handleRemoveCard={AddToCard}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
