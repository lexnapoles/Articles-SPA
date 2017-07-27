import React from 'react';
import { articleOverviewPropType } from '../../propTypes';

const ArticleOverview = ({ article, onClick, onDelete }) => {
  const { author, excerpt, title } = article;

  const onDeleteHandler = event => {
    event.stopPropagation();
    onDelete();
  };

  return (
    <section className="b-list__item" onClick={onClick} >
      <button onClick={onDeleteHandler} >Delete</button >
      <h1 >{title}</h1 >
      <h2 >{author}</h2 >
      <p >{excerpt}</p >
    </section >
  );
};

ArticleOverview.propTypes = articleOverviewPropType;

export default ArticleOverview;
