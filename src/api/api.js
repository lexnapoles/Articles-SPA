import request from '../api/request';
import { ARTICLES_QUERY } from './queries';

export const fetchArticles = () =>
  request(ARTICLES_QUERY)
    .then(({ data }) => data.articles);
