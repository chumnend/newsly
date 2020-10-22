import { SET_ARTICLES, SET_URL } from '../actionTypes';
import axios from 'axios';
import config from '../../config';

const PAGE_SIZE = 10;

const setArticles = (articles, page, totalPages) => {
  return {
    type: SET_ARTICLES,
    articles,
    page,
    totalPages,
  };
};

const setURL = (url) => {
  return {
    type: SET_URL,
    url,
  };
};

export const fetchTopHeadlines = () => {
  return async (dispatch) => {
    const url = `${config.prefix}/v2/top-headlines?apiKey=${config.key}&country=us&pageSize=${PAGE_SIZE}`;
    dispatch(setURL(url));

    const { data } = await axios.get(url);
    const articles = data.articles;
    const totalPages = Math.ceil(data.totalResults / PAGE_SIZE);

    dispatch(setArticles(articles, 1, totalPages));
  };
};

export const fetchHeadlinesBySearch = (search) => {
  return async (dispatch) => {
    const url = `${config.prefix}/v2/everything?apiKey=${config.key}&q=${search}&pageSize=${PAGE_SIZE}`;
    dispatch(setURL(url));

    const { data } = await axios.get(url);
    const articles = data.articles;
    const totalPages = Math.ceil(data.totalResults / PAGE_SIZE);

    dispatch(setArticles(articles, 1, totalPages));
  };
};

export const fetchNextPage = () => {
  return async (dispatch, getState) => {
    const currState = getState();
    const { page, url } = currState.news;

    const { data } = await axios.get(`${url}&page=${page + 1}`);
    const articles = data.articles;
    const totalPages = Math.ceil(data.totalResults / PAGE_SIZE);

    dispatch(setArticles(articles, page + 1, totalPages));
  };
};

export const fetchPrevPage = () => {
  return async (dispatch, getState) => {
    const currState = getState();
    const { page, url } = currState.news;

    const { data } = await axios.get(`${url}&page=${page - 1}`);
    const articles = data.articles;
    const totalPages = Math.ceil(data.totalResults / PAGE_SIZE);

    dispatch(setArticles(articles, page - 1, totalPages));
  };
};
