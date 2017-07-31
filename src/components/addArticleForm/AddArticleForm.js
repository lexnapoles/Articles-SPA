import React from 'react';
import { articleFormPropType } from '../propTypes';
import './b-form.css';
import Input from '../input/Input';
import TextArea from '../TextArea/TextArea';
import TagsInputContainer from '../tagsInput/TagsInputContainer';

const AddArticleForm = ({
  article,
  errors,
  onAuthorChange,
  onContentChange,
  onTitleChange,
  onTagsChange,
  onSubmit,
}) => {
  const { author, title, content, tags } = article;

  const inputStyles = {
    className: 'b-form__input',
    invalidClassName: 'b-form__input b-form__input_invalid',
    wrapperClassName: 'b-form__input-wrapper',
    labelClassName: 'b-form__label',
    invalidLabelClassName: 'b-form__label b-form__label_invalid',
  };

  return (
    <form className="b-form" onSubmit={onSubmit} >
      <Input
        styles={inputStyles}
        error={errors.title}
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
      />

      <Input
        styles={inputStyles}
        error={errors.author}
        placeholder="Author"
        value={author}
        onChange={onAuthorChange}
      />

      <TextArea
        styles={inputStyles}
        error={errors.content}
        placeholder="Content"
        value={content}
        onChange={onContentChange}
      />

      <TagsInputContainer tags={tags} onChange={onTagsChange} />

      <button type="submit" >Add Article</button >
    </form >
  );
};

AddArticleForm.propTypes = articleFormPropType;

export default AddArticleForm;
