import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App  from './App';
import Shop from './Shop';
import Cart from './Cart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
