import { all } from 'redux-saga/effects';
import { watchFetchArticles } from './articles';

export default function* () {
  yield all([
    watchFetchArticles(),
  ]);
}
