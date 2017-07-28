import React from 'react';
import { articleFormPropType } from '../propTypes';
import '../addArticleForm/b-form.css';
import Input from '../input/Input';

// TODO: Replace tags input with a intuitive way to add tags.

const UpdateArticleForm = ({
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
  const labelClassName = 'b-form__label';
  const inputWrapperClassName = 'b-form__input-wrapper';
  const invalidClassName = 'b-form__input_invalid';
  const invalidLabelClassName = 'b-form__label b-form__label_invalid';

  const hasError = value => Boolean(value.length);

  return (
    <form className="b-form" onSubmit={onSubmit} >
      <Input
        className={inputClassName}
        wrapperClassName={inputWrapperClassName}
        labelClassName={labelClassName}
        invalidClassName={invalidClassName}
        invalidLabelClassName={invalidLabelClassName}
        error={errors.title}
        title={'Title'}
        value={title}
        onChange={onTitleChange}
      />

      <Input
        className={inputClassName}
        wrapperClassName={inputWrapperClassName}
        labelClassName={labelClassName}
        title={'Author'}
        invalidClassName={invalidClassName}
        invalidLabelClassName={invalidLabelClassName}
        error={errors.author}
        value={author}
        onChange={onAuthorChange}
      />

      <div className={inputWrapperClassName}>
        <label className={labelClassName}>Content</label>
        <textarea
          className={!hasError((errors.title)) ? inputClassName : invalidClassName}
          value={content}
          onChange={onContentChange}
        />
      </div>

      <Input
        className={inputClassName}
        wrapperClassName={inputWrapperClassName}
        labelClassName={labelClassName}
        title={'Tags'}
        invalidClassName={invalidClassName}
        invalidLabelClassName={invalidLabelClassName}
        error={errors.tags}
        value={tags}
        onChange={onTagsChange}
      />

      <button type="submit" >Update Article</button >
    </form >
  );
};

UpdateArticleForm.propTypes = articleFormPropType;

export default UpdateArticleForm;
