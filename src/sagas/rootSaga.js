import { all } from 'redux-saga/effects';
import { watchDeleteArticle, watchFetchArticles, watchLoadArticle } from './articles';

export default function* () {
  yield all([
    watchFetchArticles(),
    watchLoadArticle(),
    watchDeleteArticle(),
  ]);
}
