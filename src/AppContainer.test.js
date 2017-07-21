import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer />, div);
});

it('gets the articles from the server response', () => {
  const serverResponse = {
    data: {
      articles: ['articles'],
    },
  };

  const articles = AppContainer.getArticles(serverResponse);

  expect(articles).toMatchObject(serverResponse.data.articles);
});
