import React from 'react';
import { shallow } from 'enzyme';
import ArticleOverview from './ArticleOverview';

it('renders without crashing', () => {
  const article = {
    id: 'id',
    author: 'author',
    title: 'title',
    excerpt: 'excerpt',
  };

  shallow(<ArticleOverview article={article} onClick={() => undefined} />);
});
