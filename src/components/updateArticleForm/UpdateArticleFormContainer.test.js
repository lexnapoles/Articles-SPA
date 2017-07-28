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
    tags: 'tag1;',
  };

  const errors = UpdateArticleFormContainer.validateArticle(article);

  expect(errors).toEqual({
    author: 'This field cannot be empty',
    content: 'This field cannot be empty',
    title: 'This field cannot be empty',
    tags: 'Invalid tags format: tag1;tag2',
  });
});

it('creates a submittable article before submitting', () => {
  const article = {
    author: 'Author',
    content: 'Content',
    title: 'Title',
    tags: 'tag1;tag2',
    published: true,
  };

  const errors = UpdateArticleFormContainer.getSubmittableArticle(article);

  expect(errors).toEqual({
    author: 'Author',
    content: 'Content',
    title: 'Title',
    tags: ['tag1', 'tag2'],
    published: true,
  });
});
