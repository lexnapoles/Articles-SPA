import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import articles from '../reducers/articles';

export default () => {
  const store = createStore(
    articles,
    devToolsEnhancer(),
  );

  return store;
};

