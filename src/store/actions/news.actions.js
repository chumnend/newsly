import { SET_ARTICLES } from '../actionTypes';
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

export const fetchTopHeadlines = () => {
  return async (dispatch) => {
    const url = `${config.prefix}/v2/top-headlines?apiKey=${config.key}&country=us&pageSize=${PAGE_SIZE}`;
    const { data } = await axios.get(url);
    const articles = data.articles;
    const totalPages = Math.ceil(data.totalResults / PAGE_SIZE);

    dispatch(setArticles(articles, 1, totalPages));
  };
};

export const fetchHeadlinesBySearch = (search) => {
  return async (dispatch) => {
    const url = `${config.prefix}/v2/everything?apiKey=${config.key}&q=${search}&pageSize=${PAGE_SIZE}`;
    const { data } = await axios.get(url);
    const articles = data.articles;
    const totalPages = Math.ceil(data.totalResults / PAGE_SIZE);

    dispatch(setArticles(articles, 1, totalPages));
  };
};
