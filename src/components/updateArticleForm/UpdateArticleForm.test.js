import React from 'react';
import { shallow } from 'enzyme';
import UpdateArticleForm from './UpdateArticleForm';

it('renders without crashing', () => {
  const article = {
    author: '',
    content: '',
    tags: '',
    title: '',
  };

  const errors = {
    author: '',
    content: '',
    tags: '',
    title: '',
  };

  const placeholderFn = () => undefined;

  shallow(<UpdateArticleForm
    article={article}
    errors={errors}
    onAuthorChange={placeholderFn}
    onContentChange={placeholderFn}
    onTagsChange={placeholderFn}
    onTitleChange={placeholderFn}
    onSubmit={placeholderFn}
  />);
});
