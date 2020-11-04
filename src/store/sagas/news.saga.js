import { put } from 'redux-saga/effects';
import axios from 'axios';
import {
  setArticles,
  setURL,
  addSource,
  fetching,
  fetchSuccess,
  fetchError,
} from '../actions';
import { urls, PAGE_SIZE } from '../../config';

export function* fetchTopHeadlinesSaga(action) {
  yield put(fetching());

  try {
    const url = urls.topHeadlines;
    yield put(setURL(url));

    const res = yield axios.get(url);
    const articles = res.data.articles;
    const totalPages = Math.ceil(res.data.totalResults / PAGE_SIZE);

    yield put(setArticles(articles, 1, totalPages));
    yield put(fetchSuccess());
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* fetchHeadlinesByQuerySaga(action) {
  yield put(fetching());

  try {
    const url = `${urls.everything}&q=${action.query}`;
    yield put(setURL(url));

    const res = yield axios.get(url);
    const articles = res.data.articles;
    const totalPages = Math.ceil(res.data.totalResults / PAGE_SIZE);

    yield put(setArticles(articles, 1, totalPages));
    yield put(fetchSuccess());
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* fetchHeadlinesBySourceSaga(action) {
  yield put(addSource(action.source));
  yield put(fetching());

  try {
    const curSources = [...action.sources, action.source];
    const sourcesQuery = curSources.join(',');
    const url = `${urls.everything}&sources=${sourcesQuery}`;
    yield put(setURL(url));

    console.log(sourcesQuery, url);

    const res = yield axios.get(url);
    const articles = res.data.articles;
    const totalPages = Math.ceil(res.data.totalResults / PAGE_SIZE);

    yield put(setArticles(articles, 1, totalPages));
    yield put(fetchSuccess());
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* fetchNextPageSaga(action) {
  yield put(fetching());

  try {
    const res = yield axios.get(`${action.url}&page=${action.currPage + 1}`);
    const articles = res.data.articles;
    const totalPages = Math.ceil(res.data.totalResults / PAGE_SIZE);

    yield put(setArticles(articles, action.currPage + 1, totalPages));
    yield put(fetchSuccess());
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* fetchPreviousPageSaga(action) {
  yield put(fetching());

  try {
    const res = yield axios.get(`${action.url}&page=${action.currPage - 1}`);
    const articles = res.data.articles;
    const totalPages = Math.ceil(res.data.totalResults / PAGE_SIZE);

    yield put(setArticles(articles, action.currPage - 1, totalPages));
    yield put(fetchSuccess());
  } catch (err) {
    yield put(fetchError(err));
  }
}
