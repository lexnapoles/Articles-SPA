import { all } from 'redux-saga/effects';
import {
  watchAddArticle, watchDeleteArticle, watchFetchArticles, watchLoadArticle,
  watchUpdateArticle,
} from './articles';

export default function* () {
  yield all([
    watchFetchArticles(),
    watchLoadArticle(),
    watchAddArticle(),
    watchDeleteArticle(),
    watchUpdateArticle(),
  ]);
}
