import React from 'react';
import MdDeleteIcon from 'react-icons/lib/md/delete';
import { articleOverviewPropType } from '../../propTypes';
import './b-toolbar.css';

const ArticleOverview = ({ article, onClick, onDelete }) => {
  const { author, excerpt, title } = article;

  const onDeleteHandler = event => {
    event.stopPropagation();
    onDelete();
  };

  return (
    <section className="b-list__item" onClick={onClick} >
      <div className="b-toolbar" >
        <MdDeleteIcon className="b-toolbar__item" size={20} onClick={onDeleteHandler} />
      </div >
      <h1 >{title}</h1 >
      <h2 >{author}</h2 >
      <p >{excerpt}</p >
    </section >
  );
};

ArticleOverview.propTypes = articleOverviewPropType;

export default ArticleOverview;
