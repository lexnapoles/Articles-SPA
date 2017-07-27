import React from 'react';
import { articleOverviewPropType } from '../../propTypes';

const ArticleOverview = ({ article, onClick }) => {
  const { author, excerpt, title } = article;

  return (
    <article className="b-list__item" onClick={onClick} >
      <h1 >{title}</h1 >
      <h2 >{author}</h2 >
      <p >{excerpt}</p >
    </article >
  );
};

ArticleOverview.propTypes = articleOverviewPropType;

export default ArticleOverview;
