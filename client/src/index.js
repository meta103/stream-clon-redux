import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//applyMiddleware & compose son para la extension de chrome redux-devtools-extension
import { createStore, applyMiddleware, compose } from 'redux';
//set up para redux thunk linea 7 y parametro de applyMiddleware en linea 16
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//SETUP PARA redux-devtools-extension (optional)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

// const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)