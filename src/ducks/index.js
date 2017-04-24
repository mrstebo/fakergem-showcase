import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import address from './address';

const rootReducer = combineReducers({
  routing: routerReducer,
  address
});

export default rootReducer;
