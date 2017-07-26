import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import articlesReducer from '../reducers/articles';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    articlesReducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    ),
  );

  return store;
};

