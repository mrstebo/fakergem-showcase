import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './ducks';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const configureStore = (initialState) => {
  return createStoreWithMiddleware(reducer, initialState, devToolsEnhancer());
}

export default configureStore;
