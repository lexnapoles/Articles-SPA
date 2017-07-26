import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const reducer = () => ({});

export default () => {
  const store = createStore(
    reducer,
    devToolsEnhancer(),
  );

  return store;
};
