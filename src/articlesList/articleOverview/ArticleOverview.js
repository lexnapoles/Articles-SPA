import React from 'react';
import { singleArticlePropType } from '../../propTypes';

const ArticleOverview = article => {
  const { id, author, excerpt, title } = article;

  return (
    <article key={id} className="b-list__item" >
      <h1 >{title}</h1 >
      <h2 >{author}</h2 >
      <p >{excerpt}</p >
    </article >
  );
};

ArticleOverview.propTypes = {
  article: singleArticlePropType,
};

export default ArticleOverview;