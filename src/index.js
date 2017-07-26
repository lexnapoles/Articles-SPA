import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import AppContainer from './app/AppContainer';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <AppContainer />
  </Provider >,
  document.getElementById('root'),
);
