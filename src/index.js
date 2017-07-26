import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import ConnectedApp from './components/app/ConnectedApp';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <ConnectedApp />
  </Provider >,
  document.getElementById('root'),
);
