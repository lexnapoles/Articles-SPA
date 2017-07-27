import { combineReducers } from 'redux';
import { merge, omit } from 'lodash/object';
import { union } from 'lodash/array';
import { DELETE_ARTICLE, FETCH_ARTICLE_BY_ID, FETCH_ARTICLES } from '../constants/actionTypes';

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

    case DELETE_ARTICLE.SUCCESS: {
      const { id } = action.payload;

      return omit(state, id);
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

    case DELETE_ARTICLE.SUCCESS: {
      const { id } = action.payload;

      return state.filter(articleId => articleId !== id);
    }

    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds,
});
