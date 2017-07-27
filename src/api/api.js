import request from '../api/request';
import { ARTICLE_BY_ID_QUERY, ARTICLES_QUERY } from './queries';
import { normalizeArticles } from './schema';

export const fetchArticles = () =>
  request(ARTICLES_QUERY)
    .then(({ data }) => normalizeArticles(data));

export const fetchArticleById = id =>
  request(ARTICLE_BY_ID_QUERY(id))
    .then(({ data }) => data.article);
