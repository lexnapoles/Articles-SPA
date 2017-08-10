import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import articles from './articles';

export default combineReducers({
  articles,
  router: routerReducer,
});
