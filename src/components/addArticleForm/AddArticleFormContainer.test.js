import React from 'react';
import { shallow } from 'enzyme';
import AddArticleFormContainer from './AddArticleFormContainer';

it('renders without crashing', () => {
  shallow(<AddArticleFormContainer onSubmit={() => undefined} />);
});

it('validates the article', () => {
  const article = {
    author: '',
    content: '',
    title: '',
    tags: 'tag1;',
  };

  const errors = AddArticleFormContainer.validateArticle(article);

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
  };

  const errors = AddArticleFormContainer.getSubmittableArticle(article);

  expect(errors).toEqual({
    author: 'Author',
    content: 'Content',
    excerpt: 'Content',
    title: 'Title',
    tags: ['tag1', 'tag2'],
  });
});
