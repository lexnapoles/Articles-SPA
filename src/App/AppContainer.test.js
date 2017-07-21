import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from './AppContainer';

it('renders without crashing', () => {
  shallow(<AppContainer />);
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
