import { applyMiddleware, createStore, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      promise,
      logger,
      thunk,
    ),
  ),
);
