import request from '../api/request';
import {
  ADD_ARTICLE_QUERY, ARTICLE_BY_ID_QUERY, ARTICLES_QUERY, DELETE_ARTICLE_QUERY,
  UPDATE_ARTICLE_QUERY,
} from './queries';
import { normalizeArticles } from './schema';

const requestData = (query, selector, variables = {}) =>
  request(query, variables)
    .then(({ data }) => selector(data));


export const fetchArticles = () => requestData(ARTICLES_QUERY, normalizeArticles);

export const fetchArticleById = id => requestData(
  ARTICLE_BY_ID_QUERY,
  ({ article }) => article,
  { id });

export const deleteArticle = id => requestData(
  DELETE_ARTICLE_QUERY,
  data => data.deleteArticle,
  { article: { id } });

export const addArticle = article => requestData(
  ADD_ARTICLE_QUERY,
  data => data.addArticle,
  { article });

export const updateArticle = article => requestData(
  UPDATE_ARTICLE_QUERY,
  data => data.updateArticle,
  { article });
