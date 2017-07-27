import articlesReducer from './articles';
import { DELETE_ARTICLE, FETCH_ARTICLE_BY_ID, FETCH_ARTICLES } from '../constants/actionTypes';

it('adds the fetched articles to the store when FETCH_ARTICLES_SUCCESS action has been received', () => {
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

it('merges previous articles with the new versions when FETCH_ARTICLES_SUCCESS action has been received ', () => {
  const initialState = {
    byId: {
      '5978b81ed092522a4c85a481': {
        id: '5978b81ed092522a4c85a481',
        excerpt: 'An Excerpt',
        author: 'Author',
        title: 'Title',
      },
    },
    allIds: ['5978b81ed092522a4c85a481'],
  };

  const action = {
    type: FETCH_ARTICLES.SUCCESS,
    payload: {
      entities: {
        articles: {
          '5978b81ed092522a4c85a481': {
            id: '5978b81ed092522a4c85a481',
            author: 'Name LastName ',
            content: 'Content',
            published: true,
            tags: ['Tag'],
            title: 'Changed Title',
          },
        },
      },
      result: {
        articles: ['5978b81ed092522a4c85a481'],
      },
    },
  };

  const nextState = articlesReducer(initialState, action);

  const expectedState = {
    byId: {
      '5978b81ed092522a4c85a481': {
        id: '5978b81ed092522a4c85a481',
        author: 'Name LastName ',
        excerpt: 'An Excerpt',
        content: 'Content',
        published: true,
        tags: ['Tag'],
        title: 'Changed Title',
      },
    },
    allIds: ['5978b81ed092522a4c85a481'],
  };

  expect(nextState).toEqual(expectedState);
});

it('adds a single fetched article to the store when FETCH_ARTICLE_BY_ID_SUCCESS action has been received', () => {
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

it('merges a fetched article with its previous version when FETCH_ARTICLE_BY_ID_SUCCESS action has been received', () => {
  const initialState = {
    byId: {
      '5978b81ed092522a4c85a481': {
        id: '5978b81ed092522a4c85a481',
        excerpt: 'An Excerpt',
        author: 'Author',
        title: 'Title',
      },
    },
    allIds: ['5978b81ed092522a4c85a481'],
  };

  const action = {
    type: FETCH_ARTICLE_BY_ID.SUCCESS,
    payload: {
      id: '5978b81ed092522a4c85a481',
      author: 'Author',
      content: 'New Content',
      published: true,
      tags: ['Tag', 'New Tag'],
      title: 'Title',
    },
  };

  const nextState = articlesReducer(initialState, action);

  const expectedState = {
    byId: {
      '5978b81ed092522a4c85a481': {
        id: '5978b81ed092522a4c85a481',
        excerpt: 'An Excerpt',
        author: 'Author',
        content: 'New Content',
        published: true,
        tags: ['Tag', 'New Tag'],
        title: 'Title',
      },
    },
    allIds: ['5978b81ed092522a4c85a481'],
  };

  expect(nextState).toEqual(expectedState);
});

it('deletes an article when DELETE_ARTICLE_SUCCESS action has been received', () => {
  const initialState = {
    byId: {
      '5978b81ed092522a4c85a481': {
        id: '5978b81ed092522a4c85a481',
        excerpt: 'An Excerpt',
        author: 'Author',
        title: 'Title',
      },
    },
    allIds: ['5978b81ed092522a4c85a481'],
  };

  const action = {
    type: DELETE_ARTICLE.SUCCESS,
    payload: {
      id: '5978b81ed092522a4c85a481',
    },
  };

  const nextState = articlesReducer(initialState, action);

  const expectedState = {
    byId: {},
    allIds: [],
  };

  expect(nextState).toEqual(expectedState);
});

