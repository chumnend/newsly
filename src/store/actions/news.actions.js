import { SET_ARTICLES } from '../actionTypes';
import axios from 'axios';
import config from '../../config';

const setArticles = (articles, page) => {
  return {
    type: SET_ARTICLES,
    articles,
    page,
  };
};

export const fetchTopHeadlines = () => {
  return async (dispatch) => {
    const url = `${config.prefix}/v2/top-headlines?apiKey=${config.key}&country=us&pageSize=10`;
    const { data } = await axios.get(url);
    dispatch(setArticles(data.articles, 1));
  };
};

export const fetchHeadlinesBySearch = (search) => {
  return async (dispatch) => {
    const url = `${config.prefix}/v2/everything?apiKey=${config.key}&q=${search}&pageSize=10`;
    const { data } = await axios.get(url);
    dispatch(setArticles(data.articles, 1));
  };
};
