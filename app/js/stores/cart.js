import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/cart';
import thunkMiddleware from 'redux-thunk';
import apiMiddleware  from '../middle/apiMiddle';

let middleware = [thunkMiddleware, apiMiddleware];

if (process.env.NODE_ENV !== 'production') {
  let logger = require('redux-logger')();
  middleware = [...middleware, logger];
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
};