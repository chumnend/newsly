import { takeEvery, all } from 'redux-saga/effects';
import {
  fetchTopHeadlinesSaga,
  fetchHeadlinesByQuerySaga,
  fetchHeadlinesBySourceSaga,
  fetchNextPageSaga,
  fetchPreviousPageSaga,
} from './news.saga';
import {
  FETCH_TOP_HEADLINES_REQUEST,
  FETCH_HEADLINES_BY_QUERY_REQUEST,
  FETCH_HEADLINES_BY_SOURCE_REQUEST,
  FETCH_NEXT_PAGE_REQUEST,
  FETCH_PREVIOUS_PAGE_REQUEST,
} from '../actionTypes';

export function* watchNews() {
  yield all([
    takeEvery(FETCH_TOP_HEADLINES_REQUEST, fetchTopHeadlinesSaga),
    takeEvery(FETCH_HEADLINES_BY_QUERY_REQUEST, fetchHeadlinesByQuerySaga),
    takeEvery(FETCH_HEADLINES_BY_SOURCE_REQUEST, fetchHeadlinesBySourceSaga),
    takeEvery(FETCH_NEXT_PAGE_REQUEST, fetchNextPageSaga),
    takeEvery(FETCH_PREVIOUS_PAGE_REQUEST, fetchPreviousPageSaga),
  ]);
}
