import React from 'react';
import ReactDOM from 'react-dom';
import ArticleOverview from './ArticleOverview';

it('renders without crashing', () => {
  const article = {
    id: 'id',
    author: 'author',
    title: 'title',
    excerpt: 'excerpt',
  };

  const div = document.createElement('div');

  ReactDOM.render(<ArticleOverview article={article} />, div);
});
