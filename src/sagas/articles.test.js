import { call, put, takeEvery, fork } from 'redux-saga/effects';
import {
  watchFetchArticles, fetchArticles, fetchArticleById, loadArticle, watchLoadArticle,
  deleteArticle, watchDeleteArticle,
} from './articles';
import * as Api from '../api/api';
import { DELETE_ARTICLE, FETCH_ARTICLE_BY_ID, FETCH_ARTICLES, LOAD_ARTICLE } from '../constants/actionTypes';

describe('fetchArticles', () => {
  it('calls the fetch articles service', () => {
    const iterator = fetchArticles();

    const callFetchArticlesService = iterator.next().value;

    expect(callFetchArticlesService).toEqual(call(Api.fetchArticles));
  });

  it('dispatches a FETCH_ARTICLES_SUCCESS action with the articles when the articles are received', () => {
    const iterator = fetchArticles();

    iterator.next();

    const payload = {};
    const dispatchSuccessAction = iterator.next(payload).value;

    expect(dispatchSuccessAction).toEqual(put({ type: FETCH_ARTICLES.SUCCESS, payload }));
  });
});

describe('watchFetchArticles', () => {
  it('creates a new fetchArticles task on each FETCH_ARTICLES_REQUEST action', () => {
    const iterator = watchFetchArticles();

    const fetchArticlesOnEachRequest = iterator.next().value;

    expect(fetchArticlesOnEachRequest).toEqual(takeEvery(FETCH_ARTICLES.REQUEST, fetchArticles));
  });


  describe('fetchArticleById', () => {
    it('calls the fetch articles by id service', () => {
      const iterator = fetchArticleById('5978b81ed092522a4c85a481');

      const callFetchArticleByIdService = iterator.next().value;

      expect(callFetchArticleByIdService).toEqual(call(Api.fetchArticleById, '5978b81ed092522a4c85a481'));
    });
  });

  it('dispatches a FETCH_ARTICLE_BY_ID_SUCCESS action with the article when the article is received', () => {
    const action = {
      payload: '5978b81ed092522a4c85a481',
    };

    const iterator = fetchArticleById(action);

    iterator.next();

    const payload = {};
    const dispatchSuccessAction = iterator.next(payload).value;

    expect(dispatchSuccessAction).toEqual(put({ type: FETCH_ARTICLE_BY_ID.SUCCESS, payload }));
  });
});

describe('loadArticle', () => {
  it('fetches the article if it is not cached', () => {
    const ARTICLE_REQUIRED = '5978b81ed092522a4c85a481';
    const requiredFields = ['author', 'content', 'published', 'tags', 'title'];
    const iterator = loadArticle(ARTICLE_REQUIRED, requiredFields);
    const article = undefined;

    iterator.next();

    const fetchArticle = iterator.next(article).value;

    expect(fetchArticle).toEqual(call(fetchArticleById, ARTICLE_REQUIRED));
  });

  it('does not fetched the article if it is cached', () => {
    const ARTICLE_REQUIRED = '5978b81ed092522a4c85a481';
    const requiredFields = ['author', 'content', 'published', 'tags', 'title'];
    const iterator = loadArticle(ARTICLE_REQUIRED, requiredFields);

    const article = {
      id: '5978b81ed092522a4c85a481',
      author: 'Author',
      content: 'Content',
      published: true,
      tags: ['Tag'],
      title: 'Title',
    };

    iterator.next();

    const fetchArticle = iterator.next(article).value;

    expect(fetchArticle).toEqual(undefined);
  });
});

describe('watchLoadArticle', () => {
  it('spawns a new loadArticle worker every LOAD_ARTICLE action', () => {
    const iterator = watchLoadArticle();

    iterator.next();

    const id = '5978b81ed092522a4c85a481';
    const requiredFields = ['author', 'content', 'published', 'tags', 'title'];
    const action = {
      type: LOAD_ARTICLE,
      payload: {
        id,
        requiredFields,
      },
    };

    const spawnLoadArticle = iterator.next(action).value;

    expect(spawnLoadArticle).toEqual(fork(loadArticle, id, requiredFields));
  });
});

describe('deleteArticle', () => {
  it('calls the delete article service', () => {
    const id = '5978b81ed092522a4c85a481';
    const iterator = deleteArticle(id);

    const callDeleteService = iterator.next().value;

    expect(callDeleteService).toEqual(call(Api.deleteArticle, id));
  });

  it('dispatches the DELETE_ARTICLE_SUCCESS when the article has been deleted', () => {
    const id = '5978b81ed092522a4c85a481';
    const iterator = deleteArticle(id);

    iterator.next();

    const dispatchSuccessAction = iterator.next(id).value;

    expect(dispatchSuccessAction).toEqual(put({ type: DELETE_ARTICLE.SUCCESS, payload: { id } }));
  });
});

describe('watchDeleteArticle', () => {
  it('spawns a new deleteArticle worker every DELETE_ARTICLE_REQUEST action', () => {
    const iterator = watchDeleteArticle();

    iterator.next();

    const id = '5978b81ed092522a4c85a481';
    const action = {
      type: DELETE_ARTICLE.REQUEST,
      payload: {
        id,
      },
    };

    const spawnDeleteArticle = iterator.next(action).value;

    expect(spawnDeleteArticle).toEqual(fork(deleteArticle, id));
  });
});