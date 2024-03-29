import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const feelingReducer = (state = '', action) => {
  if (action.type === 'SET_FEELING') {
    return action.payload;
  }
  return state;
};

const understandingReducer = (state = '', action) => {
  if (action.type === 'SET_UNDERSTANDING') {
    return action.payload;
  }
  return state;
};

const supportReducer = (state = '', action) => {
  if (action.type === 'SET_SUPPORT') {
    return action.payload;
  }
  return state;
};

const commentReducer = (state = '', action) => {
  if (action.type === 'SET_COMMENTS') {
    return action.payload;
  }
  return state;
};

const store = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentReducer
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
