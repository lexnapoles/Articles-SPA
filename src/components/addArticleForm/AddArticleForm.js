import React from 'react';
import { addArticleFormPropType } from '../propTypes';
import './b-form.css';

const AddArticleForm = ({
                          article,
                          onAuthorChange,
                          onContentChange,
                          onTitleChange,
                          onTagsChange,
                          onSubmit,
                        }) => {
  const { author, title, content, tags } = article;

  return (
    <form className="b-form" onSubmit={onSubmit} >
      <input className="b-form__input" placeholder="Title" value={author} onChange={onAuthorChange} />

      <input className="b-form__input" placeholder="Author" value={title} onChange={onTitleChange} />

      <textarea className="b-form__input" placeholder="Content" value={content} onChange={onContentChange} />

      <input className="b-form__input" placeholder="Tags: tag1;tag2;tag3..." value={tags} onChange={onTagsChange} />

      <button type="submit" >Add Article</button >
    </form >
  );
};

AddArticleForm.propTypes = addArticleFormPropType;

export default AddArticleForm;
