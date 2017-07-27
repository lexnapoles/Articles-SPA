import { combineReducers } from 'redux';
import { merge } from 'lodash/object';
import { union } from 'lodash/array';
import { FETCH_ARTICLE_BY_ID, FETCH_ARTICLES } from '../constants/actionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_BY_ID.SUCCESS: {
      const article = action.payload;

      return merge(state, {
        [article.id]: article,
      });
    }

    case FETCH_ARTICLES.SUCCESS: {
      const { articles } = action.payload.entities;

      return merge(state, articles);
    }

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLE_BY_ID.SUCCESS: {
      const { id } = action.payload;

      return union(state, [id]);
    }

    case FETCH_ARTICLES.SUCCESS: {
      const { articles } = action.payload.result;

      return union(state, articles);
    }

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});
