import React from 'react';
import { articlesPropType } from './propTypes';
import Article from './Article';

const ArticlesList = ({ articles }) => (
  <div >
    {articles.map(Article)}
  </div >
);

ArticlesList.propTypes = {
  articles: articlesPropType,
};

export default ArticlesList;
