import React from 'react';
import { articlesListPropType } from '../propTypes';
import ArticleOverview from './articleOverview/ArticleOverview';
import './b-list.css';

const ArticlesList = ({ articles, onClick }) => (
  <div className="b-list" >
    {articles.map(article =>
      <ArticleOverview
        key={article.id}
        article={article}
        onClick={() => onClick(article.id)}
      />)}
  </div >
);

ArticlesList.propTypes = articlesListPropType;

export default ArticlesList;
