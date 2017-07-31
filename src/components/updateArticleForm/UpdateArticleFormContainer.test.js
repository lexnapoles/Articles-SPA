import React from 'react';
import { shallow } from 'enzyme';
import UpdateArticleFormContainer from './UpdateArticleFormContainer';

it('renders without crashing', () => {
  const article = {
    author: '',
    content: '',
    tags: [''],
    title: '',
    published: false,
  };

  const placeholderFn = () => undefined;

  shallow(<UpdateArticleFormContainer article={article} onSubmit={placeholderFn} loadArticle={placeholderFn} id="" />);
});

it('validates the article', () => {
  const article = {
    author: '',
    content: '',
    title: '',
    tags: [''],
  };

  const errors = UpdateArticleFormContainer.validateArticle(article);

  expect(errors).toEqual({
    author: 'This field cannot be empty',
    content: 'This field cannot be empty',
    title: 'This field cannot be empty',
    tags: '',
  });
});
