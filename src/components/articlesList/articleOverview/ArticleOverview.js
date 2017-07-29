import React from 'react';
import MdDeleteIcon from 'react-icons/lib/md/delete';
import MdEditIcon from 'react-icons/lib/md/mode-edit';
import { articleOverviewPropType } from '../../propTypes';
import './b-toolbar.css';

const ArticleOverview = ({ article, onClick, onDelete, onUpdate }) => {
  const { author, excerpt, title } = article;

  const onHandler = handler => event => {
    event.stopPropagation();
    handler();
  };

  return (
    <section className="b-list__item" onClick={onClick} >
      <div className="b-toolbar" >
        <MdEditIcon className="b-toolbar__item" size={23} onClick={onHandler(onUpdate)} />
        <MdDeleteIcon className="b-toolbar__item" size={23} onClick={onHandler(onDelete)} />
      </div >
      <h1 >{title}</h1 >
      <h2 >{author}</h2 >
      <p >{excerpt}</p >
    </section >
  );
};

ArticleOverview.propTypes = articleOverviewPropType;

export default ArticleOverview;
