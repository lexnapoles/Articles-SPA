import React from 'react';
import { articleFormPropType } from '../propTypes';
import './b-form.css';
import Input from '../inputs/input/Input';
import TextArea from '../inputs/textArea/TextArea';
import TagsInputContainer from '../inputs/tagsInput/TagsInputContainer';

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

  const inputClassName = 'b-form__base-input b-form__input';

  const inputStyles = {
    className: inputClassName,
    invalidClassName: `${inputClassName} b-form__input_invalid`,
    wrapperClassName: 'b-form__input-wrapper',
    labelClassName: 'b-form__label',
    invalidLabelClassName: 'b-form__label b-form__label_invalid',
  };

  const textAreaStyles = {
    ...inputStyles,
    className: 'b-form__base-input b-form__text',
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
        styles={textAreaStyles}
        error={errors.content}
        placeholder="Content"
        value={content}
        onChange={onContentChange}
      />

      <TagsInputContainer tags={tags} onChange={onTagsChange}  />

      <button className="b-form__submit-button" type="submit" >Add Article</button >
    </form >
  );
};

AddArticleForm.propTypes = articleFormPropType;

export default AddArticleForm;
