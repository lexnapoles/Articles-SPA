import { call, put, takeEvery } from 'redux-saga/effects';
import { watchFetchArticles, fetchArticles, fetchArticleById } from './articles';
import * as Api from '../api/api';
import { FETCH_ARTICLE_BY_ID, FETCH_ARTICLES } from '../constants/actionTypes';

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
    const iterator = fetchArticleById();

    iterator.next();

    const payload = {};
    const dispatchSuccessAction = iterator.next(payload).value;

    expect(dispatchSuccessAction).toEqual(put({ type: FETCH_ARTICLE_BY_ID.SUCCESS, payload }));
  });
});
