import React from 'react';
import { shallow } from 'enzyme';
import UpdateArticleForm from './UpdateArticleForm';

it('renders without crashing', () => {
  const article = {
    author: '',
    content: '',
    tags: [],
    title: '',
    published: true,
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
    onPublishedChange={placeholderFn}
    onSubmit={placeholderFn}
  />);
});
