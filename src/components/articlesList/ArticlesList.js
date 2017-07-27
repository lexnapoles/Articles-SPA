import React from 'react';
import { articlesListPropType } from '../propTypes';
import ArticleOverview from './articleOverview/ArticleOverview';
import './b-list.css';

const ArticlesList = ({ articles }) => (
  <div className="b-list" >
    {articles.map(ArticleOverview)}
  </div >
);

ArticlesList.propTypes = {
  articles: articlesListPropType,
};

export default ArticlesList;
