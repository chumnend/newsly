import {
  SET_ARTICLES,
  SET_URL,
  FETCHING,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_TOP_HEADLINES_REQUEST,
  FETCH_HEADLINES_BY_QUERY_REQUEST,
  FETCH_NEXT_PAGE_REQUEST,
  FETCH_PREVIOUS_PAGE_REQUEST,
} from '../actionTypes';

export const setArticles = (articles, page, totalPages) => {
  return {
    type: SET_ARTICLES,
    articles,
    page,
    totalPages,
  };
};

export const setURL = (url) => {
  return {
    type: SET_URL,
    url,
  };
};

export const fetching = () => {
  return {
    type: FETCHING,
  };
};

export const fetchSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    error,
  };
};

export const fetchTopHeadlines = () => {
  return {
    type: FETCH_TOP_HEADLINES_REQUEST,
  };
};

export const fetchHeadlinesBySearch = (query) => {
  return {
    type: FETCH_HEADLINES_BY_QUERY_REQUEST,
    query,
  };
};

export const fetchNextPage = (currPage, url) => {
  return {
    type: FETCH_NEXT_PAGE_REQUEST,
    currPage,
    url,
  };
};

export const fetchPreviousPage = (currPage, url) => {
  return {
    type: FETCH_PREVIOUS_PAGE_REQUEST,
    currPage,
    url,
  };
};
