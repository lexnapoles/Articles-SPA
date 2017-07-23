import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';

it('renders without crashing', () => {
  const article = {
    id: 'id',
    author: 'author',
    title: 'title',
    excerpt: 'excerpt',
  };

  const div = document.createElement('div');

  ReactDOM.render(<Article article={article} />, div);
});
