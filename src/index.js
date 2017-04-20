import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import './index.css';
import Routes from './routes';

ReactDOM.render(
  <Routes history={createBrowserHistory()} />,
  document.getElementById('root')
);
