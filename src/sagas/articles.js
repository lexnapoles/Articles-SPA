import { call, put } from 'redux-saga/effects';
import * as Api from '../api/api';
import { FETCH_ARTICLES } from '../constants/actionTypes';

export const fetchArticles = function* () {
  yield call(Api.fetchArticles);

  yield put({ type: FETCH_ARTICLES.SUCCESS });
};
