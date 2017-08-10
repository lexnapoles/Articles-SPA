import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/root';
import rootSaga from '../sagas/rootSaga';
import history from '../constants/history';

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const middlewares = [sagaMiddleware, routerMiddleware];

export default () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

