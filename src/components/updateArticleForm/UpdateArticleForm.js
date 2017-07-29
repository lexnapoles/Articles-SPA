import React from 'react';
import { articleFormPropType } from '../propTypes';
import '../addArticleForm/b-form.css';
import Input from '../input/Input';
import TextArea from '../TextArea/TextArea';

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
