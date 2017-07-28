import React from 'react';
import { articleFormPropType } from '../propTypes';
import './b-form.css';
import Input from '../input/Input';
import TextArea from '../TextArea/TextArea';

// TODO: Replace tags input with a intuitive way to add tags.

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

  const inputClassName = 'b-form__input';
  const inputWrapperClassName = 'b-form__input-wrapper';
  const invalidClassName = 'b-form__input_invalid';
  const invalidLabelClassName = 'b-form__label b-form__label_invalid';

  return (
    <form className="b-form" onSubmit={onSubmit} >
      <Input
        className={inputClassName}
        wrapperClassName={inputWrapperClassName}
        invalidClassName={invalidClassName}
        invalidLabelClassName={invalidLabelClassName}
        error={errors.title}
        placeholder="Title"
        value={title}
        onChange={onTitleChange}
      />

      <Input
        className={inputClassName}
        wrapperClassName={inputWrapperClassName}
        invalidClassName={invalidClassName}
        invalidLabelClassName={invalidLabelClassName}
        error={errors.author}
        placeholder="Author"
        value={author}
        onChange={onAuthorChange}
      />

      <TextArea
        className={inputClassName}
        wrapperClassName={inputWrapperClassName}
        invalidClassName={invalidClassName}
        invalidLabelClassName={invalidLabelClassName}
        error={errors.content}
        placeholder="Content"
        value={content}
        onChange={onContentChange}
      />

      <Input
        className={inputClassName}
        wrapperClassName={inputWrapperClassName}
        invalidClassName={invalidClassName}
        invalidLabelClassName={invalidLabelClassName}
        error={errors.tags}
        placeholder="tag1 or tag1;tag2"
        value={tags}
        onChange={onTagsChange}
      />

      <button type="submit" >Add Article</button >
    </form >
  );
};

AddArticleForm.propTypes = articleFormPropType;

export default AddArticleForm;
