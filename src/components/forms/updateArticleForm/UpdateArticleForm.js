import React from 'react';
import { updateFormPropType } from '../../propTypes';
import '../b-form.css';
import Input from '../../inputs/input/Input';
import TextArea from '../../inputs/textArea/TextArea';
import TagsInputContainer from '../../inputs/tagsInput/TagsInputContainer';

const UpdateArticleForm = ({
  article,
  errors,
  onAuthorChange,
  onContentChange,
  onTitleChange,
  onTagsChange,
  onPublishedChange,
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
        title="Title"
        value={title}
        onChange={onTitleChange}
      />

      <Input
        styles={inputStyles}
        title="Author"
        error={errors.author}
        value={author}
        onChange={onAuthorChange}
      />

      <TextArea
        styles={textAreaStyles}
        title="Content"
        error={errors.content}
        placeholder="Content"
        value={content}
        onChange={onContentChange}
      />

      <TagsInputContainer onChange={onTagsChange} tags={tags} styles={inputStyles} />

      <div className="b-form__published-wrapper" >
        <label >Published &nbsp;
          <input type="checkbox" checked={article.published} onChange={onPublishedChange} />
        </label >
      </div >

      <button className="b-form__submit-button" type="submit" >Update Article</button >

    </form >
  );
};

UpdateArticleForm.propTypes = updateFormPropType;

export default UpdateArticleForm;
