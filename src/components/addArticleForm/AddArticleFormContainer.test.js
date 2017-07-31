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
    tags: [''],
  };

  const errors = AddArticleFormContainer.validateArticle(article);

  expect(errors).toEqual({
    author: 'This field cannot be empty',
    content: 'This field cannot be empty',
    title: 'This field cannot be empty',
    tags: '',
  });
});

