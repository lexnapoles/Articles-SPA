import { call, put, takeEvery } from 'redux-saga/effects';
import * as Api from '../api/api';
import { FETCH_ARTICLES } from '../constants/actionTypes';

export const fetchArticles = function* () {
  const payload = yield call(Api.fetchArticles);

  yield put({ type: FETCH_ARTICLES.SUCCESS, payload });
};

export const watchFetchArticles = function* () {
  yield takeEvery(FETCH_ARTICLES.REQUEST, fetchArticles);
};
