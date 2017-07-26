import request from '../api/request';
import { ARTICLES_QUERY } from './queries';
import { normalizeArticles } from './schema';

export const fetchArticles = () =>
  request(ARTICLES_QUERY)
    .then(({ data }) => normalizeArticles(data));
