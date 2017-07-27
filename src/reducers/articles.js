import { combineReducers } from 'redux';
import { FETCH_ARTICLE_BY_ID, FETCH_ARTICLES } from '../constants/actionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_BY_ID.SUCCESS: {
      const article = action.payload;

      return {
        ...state,
        [article.id]: article,
      };
    }

    case FETCH_ARTICLES.SUCCESS:
      return {
        ...state,
        ...action.payload.entities.articles,
      };

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLE_BY_ID.SUCCESS: {
      const { id } = action.payload;

      return [...state, id];
    }

    case FETCH_ARTICLES.SUCCESS:
      return [...state, ...action.payload.result.articles];

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});
