import { call, put, takeEvery, select, take, fork } from 'redux-saga/effects';
import * as Api from '../api/api';
import { DELETE_ARTICLE, FETCH_ARTICLE_BY_ID, FETCH_ARTICLES, LOAD_ARTICLE } from '../constants/actionTypes';
import { getArticleById } from '../selectors/articles';
import { hasAllFields } from '../utils';

// Workers

export const deleteArticle = function* (id) {
  const payload = yield call(Api.deleteArticle, id);

  yield put({ type: DELETE_ARTICLE.SUCCESS, payload });
};

export const fetchArticles = function* () {
  const payload = yield call(Api.fetchArticles);

  yield put({ type: FETCH_ARTICLES.SUCCESS, payload });
};


export const fetchArticleById = function* (id) {
  const payload = yield call(Api.fetchArticleById, id);

  yield put({ type: FETCH_ARTICLE_BY_ID.SUCCESS, payload });
};

// Loaders

export const loadArticle = function* (id, requiredFields) {
  const article = yield select(getArticleById, id);

  const hasRequiredFields = hasAllFields(article, requiredFields);

  if (!article || !hasRequiredFields) {
    yield call(fetchArticleById, id);
  }
};

// Watchers

export const watchFetchArticles = function* () {
  yield takeEvery(FETCH_ARTICLES.REQUEST, fetchArticles);
};

export const watchDeleteArticle = function* () {
  while (true) {
    const { payload } = yield take(DELETE_ARTICLE.REQUEST);

    yield fork(deleteArticle, payload.id);
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
