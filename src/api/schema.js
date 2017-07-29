import { normalize, schema } from 'normalizr';

const article = new schema.Entity('articles');

const articles = [article];

export const normalizeArticles = data => normalize(data, { articles });
