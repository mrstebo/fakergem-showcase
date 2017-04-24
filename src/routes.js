import React from 'react';
import { Router, Switch, Route } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import AddressPage from './containers/AddressPage';

const Routes = (props) => (
  <Router {...props}>
    <App>
      <Switch>
        <Route path="/address" component={AddressPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </App>
  </Router>
);

export default Routes;
