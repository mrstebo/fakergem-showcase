import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configure-store';
import createBrowserHistory from 'history/createBrowserHistory'

import './index.css';
import Routes from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes history={createBrowserHistory()} />
  </Provider>,
  document.getElementById('root')
);
