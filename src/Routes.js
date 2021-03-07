import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import NotFound from './NotFound';
import Nav from './components/Nav';
import Items from './static/data/items.json';
import _ from 'lodash';

const Routes = () => {
  const [qty, setQty] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    let newQty = productsInCart.length;
    setQty(newQty);

    for (let product in Items) {
      let item = Items[product];

      if (productsInCart.includes(product)) {
        item.isAdded = true;
      } else {
        item.isAdded = false;
      }
    }
  }, [productsInCart]);

  const AddToCart = (e) => {
    let productId = e.target.parentElement.parentElement.id;

    productId = _.split(productId, '_', 2)[1];

    setProductsInCart((arr) => {
      if (arr.includes(productId)) {
        return arr.filter((item) => item !== productId);
      } else {
        return [...arr, productId];
      }
    });
  };

  return (
    <HashRouter basename='/'>
      <Nav qty={qty} />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shop">
          <Shop
            items={Object.values(Items)}
            handleAddToCart={AddToCart}
            handleRemoveCard={AddToCart}
            productsInCart={productsInCart}
          />
        </Route>
        <Route status={404} component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
