import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('gets the articles from the server response', () => {
  const serverResponse = {
    data: {
      articles: ['articles'],
    },
  };

  const articles = App.getArticles(serverResponse);

  expect(articles).toMatchObject(serverResponse.data.articles);
});
