import React from 'react';
import { Router, Switch, Route } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import AddressModule from './modules/address';

const Routes = (props) => (
  <Router {...props}>
    <App>
      <Switch>
        <Route path="/address" component={AddressModule.Components.AddressPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </App>
  </Router>
);

export default Routes;
