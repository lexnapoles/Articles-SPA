const asyncActionTypes = actionName => ({
  REQUEST: `${actionName}_REQUEST`,
  SUCCESS: `${actionName}_SUCCESS`,
  FAILURE: `${actionName}_FAILURE`,
});

export const FETCH_ARTICLES = asyncActionTypes('FETCH_ARTICLES');
export const FETCH_ARTICLE_BY_ID = asyncActionTypes('FETCH_ARTICLE_BY_ID');

export const DELETE_ARTICLE = asyncActionTypes('DELETE_ARTICLE');

export const ADD_ARTICLE = asyncActionTypes('ADD_ARTICLE');

export const UPDATE_ARTICLE = asyncActionTypes('UPDATE_ARTICLE');

export const LOAD_ARTICLE = 'LOAD_ARTICLE';
