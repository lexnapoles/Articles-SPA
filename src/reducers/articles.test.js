import articlesReducer from './articles';
import { FETCH_ARTICLE_BY_ID, FETCH_ARTICLES } from '../constants/actionTypes';

it('adds the fetched articles to the store', () => {
  const action = {
    type: FETCH_ARTICLES.SUCCESS,
    payload: {
      entities: {
        articles: {
          '5978b81ed092522a4c85a481': {
            id: '5978b81ed092522a4c85a481',
          },
        },
      },
      result: {
        articles: ['5978b81ed092522a4c85a481'],
      },
    },
  };

  const nextState = articlesReducer(undefined, action);

  const expectedState = {
    byId: {
      '5978b81ed092522a4c85a481': {
        id: '5978b81ed092522a4c85a481',
      },
    },
    allIds: ['5978b81ed092522a4c85a481'],
  };

  expect(nextState).toEqual(expectedState);
});

it('adds a single fetched article to the store', () => {
  const action = {
    type: FETCH_ARTICLE_BY_ID.SUCCESS,
    payload: {
      id: '5978b81ed092522a4c85a481',
      author: 'Author',
      content: 'Content',
      published: true,
      tags: ['Tag'],
      title: 'Title',
    },
  };

  const nextState = articlesReducer(undefined, action);

  const expectedState = {
    byId: {
      '5978b81ed092522a4c85a481': {
        id: '5978b81ed092522a4c85a481',
        author: 'Author',
        content: 'Content',
        published: true,
        tags: ['Tag'],
        title: 'Title',
      },
    },
    allIds: ['5978b81ed092522a4c85a481'],
  };

  expect(nextState).toEqual(expectedState);
});
