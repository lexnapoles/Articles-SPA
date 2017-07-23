import React from 'react';
import { articlesPropType } from '../propTypes';
import Article from './article/Article';
import '../b-list.css';

const ArticlesList = ({ articles }) => (
  <div className="b-list">
    {articles.map(Article)}
  </div >
);

ArticlesList.propTypes = {
  articles: articlesPropType,
};

export default ArticlesList;
