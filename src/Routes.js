import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import Cart from './Cart';
import Nav from './components/Nav';

const Routes = () => {
  const [qty, setQty] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]);

  const AddToCard = (e) => {
    let productId = e.target.parentElement.parentElement.id;
    let button = e.target;

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
    console.log(productsInCart)
  }, [productsInCart]);

  return (
    <BrowserRouter>
      <Nav qty={qty} />
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          exact
          path="/shop"
          render={(props) => <Shop {...props} handleAddToCart={AddToCard} />}
        />
        <Route exact path="/cart" render={(props) => <Cart {...props} productsInCart={productsInCart} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
