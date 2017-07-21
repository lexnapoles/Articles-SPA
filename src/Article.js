import React from 'react';
import { singleArticlePropType } from './propTypes';

const Article = article => {
  const { id, author, excerpt, title } = article;

  return (
    <article key={id} >
      <h1 >{title}</h1 >
      <h2 >{author}</h2 >
      <p >{excerpt}</p >
    </article >
  );
};

Article.propTypes = {
  article: singleArticlePropType,
};

export default Article;
