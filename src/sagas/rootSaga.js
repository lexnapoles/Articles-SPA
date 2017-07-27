import { all } from 'redux-saga/effects';
import { watchFetchArticles, watchLoadArticle } from './articles';

export default function* () {
  yield all([
    watchFetchArticles(),
    watchLoadArticle(),
  ]);
}
