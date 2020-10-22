import { SET_ARTICLES } from '../actionTypes';
import axios from 'axios';
import config from '../../config';

const setArticles = (articles) => {
  return {
    type: SET_ARTICLES,
    articles,
  };
};

export const fetchTopHeadlines = () => {
  return async (dispatch) => {
    const url = `${config.prefix}/v2/top-headlines?apiKey=${config.key}&country=us&pageSize=10`;
    const { data } = await axios.get(url);
    dispatch(setArticles(data.articles));
  };
};
