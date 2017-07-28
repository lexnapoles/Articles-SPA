import React from 'react';
import { addArticleFormPropType } from '../propTypes';
import './b-form.css';

const AddArticleForm = ({
  article,
  onAuthorChange,
  onContentChange,
  onTitleChange,
}) => {
  const { author, title, content } = article;

  return (
    <div className="b-form" >
      <input placeholder="Title" value={author} onChange={onAuthorChange} />
      <input placeholder="Author" value={title} onChange={onTitleChange} />
      <input placeholder="Content" value={content} onChange={onContentChange} />
    </div >
  );
};

AddArticleForm.propTypes = addArticleFormPropType;
export default AddArticleForm;
