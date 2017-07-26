import { combineReducers } from 'redux';
import { FETCH_ARTICLES } from '../constants/actionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES.SUCCESS:
      return {
        ...state,
        ...action.payload.entities,
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES.SUCCESS:
      return [...state, ...action.payload.result];

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});
