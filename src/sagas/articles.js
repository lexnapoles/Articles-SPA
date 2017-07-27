import { call, put, takeEvery, takeLatest, select, take, fork } from 'redux-saga/effects';
import * as Api from '../api/api';
import { FETCH_ARTICLE_BY_ID, FETCH_ARTICLES, LOAD_ARTICLE } from '../constants/actionTypes';
import { getArticleById } from '../selectors/articles';

export const fetchArticles = function* () {
  const payload = yield call(Api.fetchArticles);

  yield put({ type: FETCH_ARTICLES.SUCCESS, payload });
};

export const watchFetchArticles = function* () {
  yield takeEvery(FETCH_ARTICLES.REQUEST, fetchArticles);
};

export const fetchArticleById = function* (id) {
  const payload = yield call(Api.fetchArticleById, id);

  yield put({ type: FETCH_ARTICLE_BY_ID.SUCCESS, payload });
};

export const loadArticle = function* (id, requiredFields) {
  const article = yield select(getArticleById, id);

  if (!article || requiredFields.some(key => !article[key])) {
    yield call(fetchArticleById, id);
  }
};

export const watchLoadArticle = function* () {
  while (true) {
    const {
      payload:
        {
          id,
          requiredFields = [],
        },
    } = yield take(LOAD_ARTICLE);

    yield fork(loadArticle, id, requiredFields);
  }
};
