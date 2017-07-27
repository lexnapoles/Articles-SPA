import { FETCH_ARTICLE_BY_ID, FETCH_ARTICLES } from '../constants/actionTypes';

export const fetchArticles = () => ({
  type: FETCH_ARTICLES.REQUEST,
});

export const fetchArticleById = id => ({
  type: FETCH_ARTICLE_BY_ID.REQUEST,
  payload: id,
});
