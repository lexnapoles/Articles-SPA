import React from 'react';
import { shallow } from 'enzyme';
import AddArticleForm from './AddArticleForm';

it('renders without crashing', () => {
  const article = {
    author: '',
    content: '',
    tags: [''],
    title: '',
  };

  shallow(<AddArticleForm
    article={article}
    onAuthorChange={() => undefined}
    onContentChange={() => undefined}
    onTagsChange={() => undefined}
    onTitleChange={() => undefined}
    onSubmit={() => undefined}
  />);
});
