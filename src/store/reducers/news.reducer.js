import { SET_ARTICLES } from '../actionTypes';

const initialState = {
  page: 1,
  articles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.articles,
      };
    default:
      return state;
  }
};
