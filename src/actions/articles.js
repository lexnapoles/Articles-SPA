import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  FETCH_ARTICLE_BY_ID,
  FETCH_ARTICLES,
  LOAD_ARTICLE,
} from '../constants/actionTypes';

export const fetchArticles = () => ({
  type: FETCH_ARTICLES.REQUEST,
});

export const fetchArticleById = id => ({
  type: FETCH_ARTICLE_BY_ID.REQUEST,
  payload: id,
});

export const loadArticle = (id, requiredFields) => ({
  type: LOAD_ARTICLE,
  payload: {
    id,
    requiredFields,
  },
});

export const deleteArticle = id => ({
  type: DELETE_ARTICLE.REQUEST,
  payload: {
    id,
  },
});

export const addArticle = article => ({
  type: ADD_ARTICLE.REQUEST,
  payload: {
    article,
  },
});
