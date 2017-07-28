import React from 'react';
import { addArticleFormPropType } from '../propTypes';

const AddArticleForm = ({
  article,
  onAuthorChange,
  onContentChange,
  onTitleChange,
}) => {
  const { author, title, content } = article;

  return (
    <div >
      <input placeholder="Title" value={author} onChange={onTitleChange} />
      <input placeholder="Author" value={title} onChange={onAuthorChange} />
      <input placeholder="Content" value={content} onChange={onContentChange} />
    </div >
  );
};

AddArticleForm.propTypes = addArticleFormPropType;
export default AddArticleForm;
